import React from 'react'

type IconName = 'delete' | 'settings' | 'home' | 'reviews' | 'add' | 'check' | 'checkbox-non' | 'checkbox' | 'next' | 'clear' 
type IconProps = {
    name: IconName;
    className?: string;
    onClick?: () => void;
    stroke?: string;
    pathFill?: string;
    height?: string;
    width?: string;
};
export default function Icon({ name, className, onClick, stroke, pathFill, height, width }: IconProps): React.ReactElement {
    const getPath = () => {
        switch (name) {
            case 'delete':
                return (<svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    height={height ? height : '20'}
                    viewBox='0 0 100 100'>
                    <path
                        fill={pathFill ? pathFill : 'var(--dark-primary'}
                        d="M86.412 11.98h-19.25C66.203 5.249 59.119 0 50.539 0c-8.58 0-15.662 5.247-16.623 11.98h-19.25C6.875 11.98.54 17.108.54 23.407v.586c0 4.814 3.706 8.934 8.928 10.613v53.97c0 6.3 6.337 11.425 14.126 11.425h53.89c7.79 0 14.127-5.126 14.127-11.425v-53.97c5.222-1.68 8.929-5.8 8.929-10.613v-.586c0-6.3-6.338-11.425-14.127-11.425ZM50.538 5.419c4.88 0 8.953 2.829 9.855 6.563H40.686c.901-3.735 4.974-6.563 9.852-6.563ZM84.91 88.575c0 3.312-3.332 6.007-7.426 6.007h-53.89c-4.095 0-7.427-2.695-7.427-6.007V35.417H84.91v53.158Zm8.928-64.583c0 3.312-3.332 6.007-7.426 6.007H14.665c-4.094 0-7.426-2.695-7.426-6.007v-.586c0-3.312 3.332-6.007 7.426-6.007h71.747c4.094 0 7.426 2.695 7.426 6.007v.586Z"
                    />
                    <path
                        fill={pathFill ? pathFill : 'var(--dark-primary'}
                        d="M32.577 87.653c1.85 0 3.35-1.213 3.35-2.709V54.441c0-1.495-1.5-2.709-3.35-2.709s-3.35 1.214-3.35 2.71v30.502c0 1.496 1.5 2.709 3.35 2.709ZM50.538 87.653c1.85 0 3.35-1.213 3.35-2.709V54.441c0-1.495-1.5-2.709-3.35-2.709s-3.35 1.214-3.35 2.71v30.502c0 1.496 1.5 2.709 3.35 2.709ZM68.5 87.653c1.85 0 3.35-1.213 3.35-2.709V54.441c0-1.495-1.5-2.709-3.35-2.709s-3.35 1.214-3.35 2.71v30.502c-.001 1.496 1.5 2.709 3.35 2.709Z"
                    />
                </svg>)
            case 'settings':
                return (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        height={height ? height : '20'}
                        viewBox='0 0 20 20'><path
                            fill={pathFill ? pathFill : 'var(--dark-primary'}
                            d="M16.78 10.76c-.48-.46-.74-1.1-.74-1.76 0-.66.26-1.28.74-1.76.08-.08.16-.14.26-.22.14-.1.18-.28.14-.44-.16-.58-.4-1.14-.68-1.66a.406.406 0 0 0-.4-.2c-.14.02-.24.02-.34.02-1.38 0-2.5-1.12-2.5-2.48 0-.1 0-.22.02-.34a.406.406 0 0 0-.2-.4C12.56 1.24 12 1 11.42.84a.448.448 0 0 0-.44.14c-.08.1-.16.2-.22.26-.48.46-1.1.72-1.76.72-.66 0-1.3-.26-1.76-.72-.08-.08-.14-.16-.22-.26-.1-.14-.28-.18-.44-.14-.58.18-1.14.4-1.66.68-.14.08-.22.24-.2.4.02.14.02.24.02.34 0 1.38-1.12 2.48-2.5 2.48-.1 0-.22 0-.34-.02a.406.406 0 0 0-.4.2C1.22 5.44.98 6 .82 6.58c-.04.16 0 .34.14.44.12.08.2.16.26.22.98.96.98 2.54 0 3.52-.08.08-.16.14-.26.22-.14.1-.18.28-.14.44.18.58.4 1.14.68 1.66.08.14.24.22.4.2.14-.02.24-.02.34-.02 1.38 0 2.5 1.12 2.5 2.48 0 .1 0 .22-.02.34-.02.16.06.32.2.4.52.28 1.08.52 1.66.68.16.04.34 0 .44-.14.08-.1.16-.2.22-.26.48-.46 1.1-.72 1.76-.72.66 0 1.3.26 1.76.72.08.08.14.16.22.26.08.1.2.16.32.16.04 0 .08 0 .12-.02.58-.18 1.14-.4 1.66-.68.14-.08.22-.24.2-.4-.02-.14-.02-.24-.02-.34 0-1.38 1.12-2.48 2.5-2.48.1 0 .22 0 .34.02.16.02.32-.06.4-.2.28-.52.52-1.08.68-1.66.04-.16 0-.34-.14-.44-.1-.08-.2-.14-.26-.22Zm-.86 1.7h-.18c-1.82 0-3.3 1.48-3.3 3.28v.18c-.32.16-.66.3-1.02.42l-.12-.12c-.62-.62-1.44-.96-2.32-.96-.88 0-1.7.34-2.32.96l-.12.12c-.34-.12-.68-.26-1.02-.42v-.18c0-1.82-1.48-3.28-3.3-3.28h-.18c-.16-.32-.3-.66-.42-1.02l.12-.12c1.28-1.28 1.28-3.36 0-4.66l-.12-.12c.12-.34.26-.68.42-1.02h.18c1.82 0 3.3-1.48 3.3-3.28v-.18c.32-.16.66-.3 1.02-.42l.12.12c.62.62 1.44.96 2.32.96.88 0 1.7-.34 2.32-.96l.12-.12c.34.12.68.26 1.02.42v.18c0 1.82 1.48 3.28 3.3 3.28h.18c.16.32.3.66.42 1.02l-.12.12c-.62.62-.96 1.44-.96 2.32 0 .88.34 1.7.96 2.32l.12.12c-.12.38-.26.72-.42 1.04ZM9 4.24C6.38 4.24 4.24 6.38 4.24 9c0 2.62 2.14 4.76 4.76 4.76 2.62 0 4.76-2.14 4.76-4.76 0-2.62-2.14-4.76-4.76-4.76Zm0 8.72A3.97 3.97 0 0 1 5.04 9 3.97 3.97 0 0 1 9 5.04 3.97 3.97 0 0 1 12.96 9 3.97 3.97 0 0 1 9 12.96Z"
                        />
                    </svg>)
            case 'home':
                return (<svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    height={height ? height : '20'}
                    viewBox='0 0 40 38'
                >
                    <path
                        fill={pathFill ? pathFill : 'var(--dark-primary'}
                        d="m39.329 17.209-6.063-6.063V4.144a2.292 2.292 0 0 0-4.585 0V6.56l-4.514-4.514c-2.231-2.23-6.112-2.226-8.338.004L.67 17.21a2.294 2.294 0 0 0 3.244 3.242L19.07 5.293c.494-.49 1.364-.49 1.855-.001l15.16 15.16c.449.447 1.035.67 1.62.67a2.293 2.293 0 0 0 1.622-3.914Z"
                    />
                    <path
                        fill={pathFill ? pathFill : 'var(--dark-primary'}
                        d="M20.796 9.645a1.125 1.125 0 0 0-1.592 0L5.87 22.974c-.21.21-.33.497-.33.797v9.722c0 2.281 1.85 4.13 4.131 4.13h6.601V27.402h7.453v10.223h6.6c2.282 0 4.132-1.85 4.132-4.131V23.77c0-.3-.119-.587-.33-.797L20.796 9.644Z"
                    />
                </svg>)
            case 'reviews':
                return (<svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    height={height ? height : '20'}
                    viewBox='0 0 44 44'>
                    <path
                        fill="#D9D9D9"
                        d="M19.778 7.517 42 7.52Zm0 16.552L42 24.071Zm0 16.552L42 40.623ZM2 23.916l3.419 4.29 7.692-9.654M2 7.364l3.419 4.291L13.11 2M5.333 40.62h.023Zm1.111 0c0 .762-.497 1.38-1.11 1.38-.614 0-1.112-.618-1.112-1.38 0-.761.498-1.379 1.111-1.379.614 0 1.111.618 1.111 1.38Z"
                    />
                    <path
                        stroke={`${stroke ? stroke : 'var(--dark-primary'}`}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M19.778 7.517 42 7.52M19.778 24.07 42 24.071M19.778 40.62 42 40.623M2 23.916l3.419 4.29 7.692-9.654M2 7.364l3.419 4.291L13.11 2M5.333 40.62h.023m1.088 0c0 .762-.497 1.38-1.11 1.38-.614 0-1.112-.618-1.112-1.38 0-.761.498-1.379 1.111-1.379.614 0 1.111.618 1.111 1.38Z"
                    />
                </svg>)
            case 'add':
                return (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        height={height ? height : '20'}
                        viewBox='0 0 52 52'><path
                            stroke={`${stroke ? stroke : 'var(--dark-primary'}`}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit={10}
                            strokeWidth={2}
                            d="M26 51V1M1 26h50"
                        />
                    </svg>)
            case 'check':
                return (<svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    height={height ? height : '20'}
                    viewBox='0 0 20 15'><path
                        stroke={`${stroke ? stroke : 'var(--dark-primary'}`}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit={10}
                        strokeWidth={2}
                        d="m1 6.395 3.75 4.046c.69.745 1.81.745 2.5 0L16 1"
                    />
                </svg>)
            case 'checkbox-non':
                return (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        height={height ? height : '20'}
                        viewBox='0 0 384 384'><path
                            stroke={`${stroke ? stroke : 'var(--dark-primary'}`}
                            fill={pathFill ? pathFill : 'none'}
                            d="M341.333 42.667v298.666H42.667V42.667h298.666Zm0-42.667H42.667C19.198 0 0 19.198 0 42.667v298.666C0 364.802 19.198 384 42.667 384h298.666C364.802 384 384 364.802 384 341.333V42.667C384 19.198 364.802 0 341.333 0Z"
                        />
                    </svg>)
            case 'checkbox':
                return (<svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    height={height ? height : '20'}
                    viewBox='0 0 384 384'><path
                        stroke={`${stroke ? stroke : 'var(--dark-primary'}`}
                        fill={pathFill ? pathFill : 'none'}
                        d="M341.333 0H42.667C19.198 0 0 19.198 0 42.667v298.666C0 364.802 19.198 384 42.667 384h298.666C364.802 384 384 364.802 384 341.333V42.667C384 19.198 364.802 0 341.333 0Zm-192 298.667L42.667 192l29.864-29.864 76.802 76.802L311.469 76.802l29.864 29.865-192 192Z"
                    />
                </svg>)
            case 'clear':
                return (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        height={height ? height : '20'}
                        viewBox='0 0 50 50'><path
                            fill={pathFill ? pathFill : 'var(--dark-primary'}
                            d="M48.31 9.848 33.16 25l15.15 15.15a5.77 5.77 0 0 1-8.157 8.16L25 33.158 9.848 48.31A5.75 5.75 0 0 1 5.77 50a5.77 5.77 0 0 1-4.078-9.85L16.84 25 1.69 9.847a5.77 5.77 0 0 1 8.156-8.16L25 16.84 40.15 1.69a5.77 5.77 0 0 1 8.159 8.16Z"
                        />
                    </svg>)
            case 'next':
                return (<svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    height={height ? height : '20'}
                    viewBox='0 0 394 80'>
                    <path
                        fill="#000"
                        d="M262 0h68.5v12.7h-27.2v66.6h-13.6V12.7H262V0ZM149 0v12.7H94v20.4h44.3v12.6H94v21h55v12.6H80.5V0h68.7zm34.3 0h-17.8l63.8 79.4h17.9l-32-39.7 32-39.6h-17.9l-23 28.6-23-28.6zm18.3 56.7-9-11-27.1 33.7h17.8l18.3-22.7z"
                    />
                    <path
                        fill="#000"
                        d="M81 79.3 17 0H0v79.3h13.6V17l50.2 62.3H81Zm252.6-.4c-1 0-1.8-.4-2.5-1s-1.1-1.6-1.1-2.6.3-1.8 1-2.5 1.6-1 2.6-1 1.8.3 2.5 1a3.4 3.4 0 0 1 .6 4.3 3.7 3.7 0 0 1-3 1.8zm23.2-33.5h6v23.3c0 2.1-.4 4-1.3 5.5a9.1 9.1 0 0 1-3.8 3.5c-1.6.8-3.5 1.3-5.7 1.3-2 0-3.7-.4-5.3-1s-2.8-1.8-3.7-3.2c-.9-1.3-1.4-3-1.4-5h6c.1.8.3 1.6.7 2.2s1 1.2 1.6 1.5c.7.4 1.5.5 2.4.5 1 0 1.8-.2 2.4-.6a4 4 0 0 0 1.6-1.8c.3-.8.5-1.8.5-3V45.5zm30.9 9.1a4.4 4.4 0 0 0-2-3.3 7.5 7.5 0 0 0-4.3-1.1c-1.3 0-2.4.2-3.3.5-.9.4-1.6 1-2 1.6a3.5 3.5 0 0 0-.3 4c.3.5.7.9 1.3 1.2l1.8 1 2 .5 3.2.8c1.3.3 2.5.7 3.7 1.2a13 13 0 0 1 3.2 1.8 8.1 8.1 0 0 1 3 6.5c0 2-.5 3.7-1.5 5.1a10 10 0 0 1-4.4 3.5c-1.8.8-4.1 1.2-6.8 1.2-2.6 0-4.9-.4-6.8-1.2-2-.8-3.4-2-4.5-3.5a10 10 0 0 1-1.7-5.6h6a5 5 0 0 0 3.5 4.6c1 .4 2.2.6 3.4.6 1.3 0 2.5-.2 3.5-.6 1-.4 1.8-1 2.4-1.7a4 4 0 0 0 .8-2.4c0-.9-.2-1.6-.7-2.2a11 11 0 0 0-2.1-1.4l-3.2-1-3.8-1c-2.8-.7-5-1.7-6.6-3.2a7.2 7.2 0 0 1-2.4-5.7 8 8 0 0 1 1.7-5 10 10 0 0 1 4.3-3.5c2-.8 4-1.2 6.4-1.2 2.3 0 4.4.4 6.2 1.2 1.8.8 3.2 2 4.3 3.4 1 1.4 1.5 3 1.5 5h-5.8z"
                    />
                </svg>)
        }
    }
    return (
        <div className={`inline-block ${className}`}
            onClick={onClick}>
            {getPath()}
        </div>
    )
}