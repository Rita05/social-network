import styled from "styled-components";

//components
import { Input } from "../../../../elements/ui/input/Input";

export const UserStatusText = styled.span`
    z-index: 1;
    font-family: Montserrat-Alternates, sans-serif;
    font-size: 16px;
    margin-top: 6px;
    word-break: break-word;
`
export const UserStatusInput = styled(Input)`
    width: auto;
    height: 16px;
    padding: 7px 12px 9px;
    border: 1px solid #dce1e6;
    border-radius: 6px;
    margin-top: 6px;
`