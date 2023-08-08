import React from 'react'
import { Column, ColumnType, MatchPolicy, TableProps } from '../../types/ModuleTypes';

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
        <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
            <table className='w-full text-sm text-left p-2 table-auto'>
                <thead className='uppercase font-semibold'>
                    {headers.map((header: Column) => {
                        return <th scope="col" className="bg-dark-accent px-6 py-3" key={header.label}>{header.label}</th>
                    })}
                </thead>
                <tbody>
                    {rows.map((row: any) => {
                        return <tr key={row.name}>
                            {headers.map((header: Column) => {
                                return <td key={row[header.name]} className="px-4 py-1 hover:bg-secondary-accent">{row[header.name]}</td>
                            })}
                        </tr>
                    }
                    )}
                </tbody>
            </table>
        </div>
    )
}
