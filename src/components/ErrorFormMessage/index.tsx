import styled from "styled-components"

interface ErrorProps {
    children: React.ReactNode
}

export const ErrorFormMessage = ({children}: ErrorProps) => {

    return (
        <ErrorElement>
            {children}
        </ErrorElement>
    )
}

const ErrorElement = styled.p`
    color: var(--red);
    font-size: 12px;
`