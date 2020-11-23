import React, { forwardRef } from 'react';
import MaterialTable, { MaterialTableProps, Icons } from 'material-table';
import { FiPlus, FiCheck, FiX, FiTrash, FiChevronRight, FiEdit, FiSave, FiFilter, FiChevronsLeft, FiChevronsRight, FiChevronLeft, FiSearch, FiChevronDown, FiEye } from 'react-icons/fi';

import { Container } from './styles';

const tableIcons = {
    Add: forwardRef((props, ref) => <FiPlus {...props} />),
    Check: forwardRef((props, ref) => <FiCheck {...props} />),
    Clear: forwardRef((props, ref) => <FiX {...props} />),
    Delete: forwardRef((props, ref) => <FiTrash {...props} />),
    DetailPanel: forwardRef((props, ref) => <FiChevronRight {...props} />),
    Edit: forwardRef((props, ref) => <FiEdit {...props} />),
    Export: forwardRef((props, ref) => <FiSave {...props} />),
    Filter: forwardRef((props, ref) => <FiFilter {...props} />),
    FirstPage: forwardRef((props, ref) => <FiChevronsLeft {...props} />),
    LastPage: forwardRef((props, ref) => <FiChevronsRight {...props} />),
    NextPage: forwardRef((props, ref) => <FiChevronRight {...props} />),
    PreviousPage: forwardRef((props, ref) => <FiChevronLeft {...props} />),
    ResetSearch: forwardRef((props, ref) => <FiX {...props} />),
    Search: forwardRef((props, ref) => <FiSearch {...props} />),
    SortArrow: forwardRef((props, ref) => <FiChevronDown {...props} />),
    ThirdStateCheck: forwardRef((props, ref) => <FiX {...props} />),
    ViewColumn: forwardRef((props, ref) => <FiEye {...props} />)
};

const Table: React.FC<MaterialTableProps<any>> = ({...props}) => {
    return (
        <Container>
            <MaterialTable 
                icons={tableIcons as Icons} 
                options={{ draggable: false, pageSizeOptions: [7,15,30,50,100], pageSize: 7 }} 
                localization={{
                    body: {
                        emptyDataSourceMessage: <p className="emptyMessage">Nenhum registro encontrado.</p>
                    }
                }}
                components={{
                    Toolbar: () => <div />
                }} 
                {...props} 
            />
        </Container>
    );
}

export default Table;