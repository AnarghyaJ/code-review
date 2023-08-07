export type Repository = {
    name: string;
    description: string;
    url: string;
    visibility: string
    owner: string
}

type InputType = "text" | "password" | "checkbox" | "radio" | "email"
type Children = React.ReactNode
type Positions = "bottom" | "top" | "left" | "right";

export type TooltipProps = {
    children?: Children;
    content: React.ReactNode;
    position: Positions;
    className?: string;
};

export type InputProps = {
    style?: React.CSSProperties;
    value: string;
    onChange: (e: any) => void;
    label: string;
    type: InputType;
    clearable?: boolean;
    readOnly?: boolean;
    required?: boolean;
};

export type TableProps = {
    headers: Array<Column>;
    rows: Array<any>;
    find?: boolean;
    filter?: boolean;
    rowSelection: "single" | "multiple" | "none";
}

export type Column = {
    name: string;
    label: string;
    type: ColumnType;
    matchPolicy?: MatchPolicy;
}

export enum MatchPolicy {
    EXACT = "exact",
    CONTAINS = "contains",
    STARTS_WITH = "startsWith",
    ENDS_WITH = "endsWith"
}

export enum ColumnType {
    TEXT = "text",
    NUMBER = "number",
    DATE = "date",
    MULTIVALE = "multivalue"
}

export type StoreType = {
    buildEnvironMent: [],
    settings: boolean,
    languages: [],
    theme: string,
    persistence: [],
    selectedPage: string,
    security: [],
    token: string,
}

export type WizardStep = {
    name: string;
    component: React.ReactNode;
    validation?: () => boolean;
    validationError?: string;
    next?: string;
    previous?: string;
    finish: boolean;
}
