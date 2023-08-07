import React from 'react';
import Table from '../common/Table';
import { Repository, Column, ColumnType } from '../../types/ModuleTypes';

const getHeaders = () => {
    const columns: Array<Column> = [
        {
            name: 'name',
            label: 'Repo Name',
            type: ColumnType.TEXT
        },
        {
            name: 'description',
            label: 'Description',
            type: ColumnType.TEXT
        },
        {
            name: 'url',
            label: 'URL',
            type: ColumnType.TEXT
        },
        {
            name: 'visibility',
            label: 'Visibility',
            type: ColumnType.MULTIVALE
        },
        {
            name: 'owner',
            label: 'Owner',
            type: ColumnType.TEXT

        }
    ]
    return columns
}


export default function Repositories({ repositories }: { repositories: Array<Repository> }) {
    const [columns, setColumns] = React.useState<Array<Column>>([])
    setColumns(getHeaders())
    return (
        <Table headers={columns}
            rows={repositories}
            rowSelection='single'
            find={true} />
    )
}
