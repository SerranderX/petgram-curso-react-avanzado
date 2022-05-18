import styled, {css} from 'styled-components';
import { fadeIn } from '@styles/animation';

const List = styled.ul`
    ${fadeIn('.3s')}
    display: flex;
    overflow: scroll;
    width: 100%;
    &::-webkit-scrollbar {
        display: none;
    }
    margin-bottom: 20px;
    ${props => props.fixed && css`
        background: #fff;
        border-radius: 60px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
        left: 0;
        margin: 0 auto;
        max-width: 400px;
        padding: 5px;
        position: fixed;
        right: 0;
        top: -20px;
        transform: scale(.5);
        z-index: 1;
    `}
`;

const Item = styled.li`
    padding: 0 8px;
`;

export {List, Item}