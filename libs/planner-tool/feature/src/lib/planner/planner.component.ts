import {Component, OnInit, ViewChild} from '@angular/core';
import {CellClickedEvent, ColDef, GridApi, GridOptions, GridReadyEvent, ValueGetterParams} from "ag-grid-community";
import {Observable, of} from "rxjs";
import {AgGridAngular} from "ag-grid-angular";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'workout-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.scss'],
})
export class PlannerComponent {
  // For accessing the Grid's API
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;
  @ViewChild(GridApi) gridApi!: GridApi;

  // Data that gets displayed in the grid
  public currentCounterForNewColumn = 0;
  public indexColumn = 3;
  public indexColumnWeight = 4;
  public rowData$!: Observable<any[]>;
  public gridOptions!: GridOptions;

  constructor(private http: HttpClient) {
  }

  // Each Column Definition results in one Column.
  public columnDefs: ColDef[] = [
    {
      headerName: 'Übung',
      field: 'Übung',
      editable: true,
      cellEditor: 'agSelectCellEditor',
      cellEditorParams(params: any) {
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
        } else {
          return {
            values: ['New York']
          };
        }
      }
    },
    {headerName: 'Zielwiederholungen', field: 'wiederholungen', editable: true, maxWidth: 140},
    {headerName: 'Zielgewicht', field: 'kilo', editable: true, maxWidth: 140},
    {headerName: 'Volume', field: 'volume', editable: true, maxWidth: 140},
  ];

  // DefaultColDef sets props common to all Columns
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };

  // Example load data from sever
  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;


    this.rowData$ = of([{"Übung": "Kniebeuge Fokusübung", "wiederholungen": 0, "kilo": 0, "volume": 0},
      {"Übung": "Bankdrücken Variation", "wiederholungen": 3, "kilo": 0},
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

  addColumnOnClick() {
    const insert = (arr: string | any[], index: number,
                    newItem: {
                      field: string; headerName: string; editable: true; maxWidth: number
                    }) => [
      // part of the array before the specified index
      ...arr.slice(0, index),
      // inserted item
      newItem,
      // part of the array after the specified index
      ...arr.slice(index)
    ]
    this.currentCounterForNewColumn += 1;

    this.columnDefs = insert(this.columnDefs, this.indexColumn, {
      field: 'satz ' + this.currentCounterForNewColumn,
      headerName: 'Set ' + +this.currentCounterForNewColumn.toString(),
      editable: true,
      maxWidth: 95,
    })
    this.columnDefs = insert(this.columnDefs, this.indexColumn + 1, {
      field: 'kg ' + this.currentCounterForNewColumn,
      headerName: 'Kg ' + +this.currentCounterForNewColumn.toString(),
      editable: true,
      maxWidth: 95
    })

    this.gridApi.setColumnDefs(this.columnDefs);


    this.indexColumnWeight += 1;
    this.indexColumn += 2;
    this.columnDefs.map((v) => {
      if (v?.field?.includes('volume')) {
        v.valueGetter = (params) => this.calculateVolumePerExcercise(params, this.currentCounterForNewColumn);
      }
      return v;
    })
  }


  // Example of consuming Grid Event
  onCellClicked(e: CellClickedEvent): void {
    console.log('cellClicked', e);
  }

  calculateVolumePerExcercise(params: ValueGetterParams, index: number) {
    let vol = 0;
    for (let i = 1; i <= index; i++) {
      vol += isNaN(Number(params.data?.['satz ' + i])) ? 0 : Number(params.data?.['satz ' + i]);

    }
    return vol;
  }

  // Example using Grid's API
  clearSelection(): void {
    this.agGrid.api.deselectAll();
  }


}
