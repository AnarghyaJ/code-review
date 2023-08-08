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
            name: 'visibility',
            label: 'Visibility',
            type: ColumnType.MULTIVALUE
        },
    ]
    return columns
}


export default function Repositories({ repositories }: { repositories: Array<Repository> }) {
    return (
        <Table headers={getHeaders()}
            rows={repositories}
            rowSelection='single'
            find={true} />
    )
}
