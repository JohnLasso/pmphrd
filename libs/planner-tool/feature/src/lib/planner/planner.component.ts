import {Component, ViewChild} from '@angular/core';
import {CellClickedEvent, ColDef, GridApi, GridReadyEvent, ValueGetterParams} from "ag-grid-community";
import {Observable, of} from "rxjs";
import {AgGridAngular} from "ag-grid-angular";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'workout-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.scss'],
})
export class PlannerComponent {
  // Data that gets displayed in the grid
  public rowData$!: Observable<any[]>;

  // For accessing the Grid's API
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;
  @ViewChild(GridApi) gridApi!: GridApi;

  constructor(private http: HttpClient) {
  }

  // Each Column Definition results in one Column.
  public columnDefs: ColDef[] = [
    {
      headerName: 'übung',
      field: 'übung',
      cellEditor: 'agSelectCellEditor',
      cellEditorParams: {
        values: ['kniebeugen'],
        //handleGridCellEvent: this.onDataChangeHandler.bind(this),
      },
      editable: true
    },
    {
      headerName: 'Übung',
      field: 'Übung',
      editable: true,
      cellEditor: 'agSelectCellEditor',
      cellEditorParams(params: any){
        if (params.data.Übung === 'Kniebeuge Fokusübung') {
          {
            return {
              values: ['Highbar-Kniebeuge', 'Front-Kniebeuge', 'Lowbar-Kniebeuge']
            };
          }
        }
        if (params.data.Übung === 'Bankdrücken Variation') {
          {
            return {
              values: ['Enges Bankdrücken', 'Dips', 'Schrägbankdrücken']
            };
          }
        }
        else {
          return {
            values: ['New York']
          };
        }
      }
    },
    {field: 'wiederholungen', editable: true},
    {field: 'kilo', editable: true},
    {headerName: 'total', valueGetter: this.abValueGetter},
  ];

  // DefaultColDef sets props common to all Columns
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };

  // Example load data from sever
  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
    this.rowData$ = of([{"Übung": "Kniebeuge Fokusübung", "wiederholungen": 0, "kilo": 0},
      {"Übung": "Bankdrücken Variation", "wiederholungen": 0, "kilo": 0},
      {"Übung": "Rückenübung Fokus", "wiederholungen": 0, "kilo": 0},
      {"Übung": "OHP-Zusatzübung", "wiederholungen": 0, "kilo": 0},
      {"Übung": "Rückenübung Variation", "wiederholungen": 0, "kilo": 0},
      {"Übung": "Trizepsübung", "wiederholungen": 0, "kilo": 0},
      {"Übung": "Bizepsübung", "wiederholungen": 0, "kilo": 0}])
  }

  addRowOnClick() {
    this.gridApi.applyTransaction({
      add: [{"übung": "", "wiederholungen": 0, "kilo": 0}]
    });
  }


  // Example of consuming Grid Event
  onCellClicked(e: CellClickedEvent): void {
    console.log('cellClicked', e);
  }

  abValueGetter(params: ValueGetterParams) {
    return Number(params.data.kilo) * Number(params.data.wiederholungen)
  }

  // Example using Grid's API
  clearSelection(): void {
    this.agGrid.api.deselectAll();
  }


}
