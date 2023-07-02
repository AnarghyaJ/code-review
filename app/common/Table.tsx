import React from 'react'
import { Column, ColumnType, MatchPolicy, TableProps } from '../types/ModuleTypes';

export const filterModel = (headers: Array<Column>) => {
    const model = headers.map((header: Column) => {
        return {
            name: header.name,
            matchPolicy: header.matchPolicy || MatchPolicy.CONTAINS,
            type: header.type,
            filterValue: header.type === ColumnType.TEXT ? "" : null
        }
    })

}

const filterFunction = (data: Array<Object>) => {

}

const getMatchFunction = (policy: MatchPolicy) => {
    switch (policy) {
        case MatchPolicy.EXACT:
            return (a: string, b: string) => a === b
        case MatchPolicy.CONTAINS:
            return (a: string, b: string) => a.includes(b)
        case MatchPolicy.STARTS_WITH:
            return (a: string, b: string) => a.startsWith(b)
        case MatchPolicy.ENDS_WITH:
            return (a: string, b: string) => a.endsWith(b)
    }
}

const findFunction = (data: Array<Object>, headers: Array<Column>, policy: MatchPolicy) => {
    headers.some((header: Column) => {
        header.name
    })
}

export default function Table(props: TableProps) {
    const { headers, rows, find, filter, rowSelection = 'none' } = props

    return (
        <div>
            <table className='table-auto'>
                <thead>
                    {headers.map((header: Column) => {
                        return <th>{header.label}</th>
                    })}
                </thead>
                <tbody>
                    {rows.map((row: any) => {
                        return <tr>
                            {headers.map((header: Column) => {
                                return <td>{row[header.name]}</td>
                            })}
                        </tr>
                    }
                    )}
                </tbody>
            </table>
        </div>
    )
}
