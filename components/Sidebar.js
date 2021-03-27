import React from 'react';
import styled from 'styled-components';
import {Avatar,IconButton} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChatIcon from '@material-ui/icons/Chat';

export default function Sidebar() {
    return (
        <Container>
            <Header>
                <UserAvatar />
                <IconsContainer>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </IconsContainer>
            </Header>
        </Container>
    )
}

const Header = styled.div`
    display:flex;
    position:sticky;
    background-color: white;
    top:0;
    z-index:1;
    justify-content: space-between;
    align-items: center;
    padding:1.2rem;
    height:5rem;
    border-bottom: 1px solid whitesmoke;
`;
const Container = styled.div`

`;
const UserAvatar = styled(Avatar)`
    cursor: pointer;

    :hover {
        opacity: 0.8;
    }
`;

const IconsContainer = styled.div`
`;