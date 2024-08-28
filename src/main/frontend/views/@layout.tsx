import React from 'react';
        import { NavLink } from 'react-router-dom';
        import { Outlet } from 'react-router-dom';
        import { AppBar, Toolbar, Typography, Container } from '@mui/material';
        import { createMenuItems } from '@vaadin/hilla-file-router/runtime.js';

        export default function Layout() {
        const menuItems = createMenuItems();

        return (
<div>
    {/* AppBar pour la navigation */}
    <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
            Vaadin Hilla Spring
        </Typography>
        {/* Liens de navigation */}
        {menuItems.map((item) => (
        <NavLink
        to={item.to}
        style={{ color: 'white', textDecoration: 'none', marginRight: '20px' }}
        activeClassName="active"
        >
        {item.title}
    </NavLink>
    ))}
</Toolbar>
        </AppBar>

        {/* Conteneur principal pour les vues */}
<Container style={{ marginTop: '20px' }}>
<Outlet />
        </Container>
        </div>
        );
        }
