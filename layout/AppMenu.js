import getConfig from 'next/config';
import React, { useContext } from 'react';
import AppMenuitem from './AppMenuitem';
import { LayoutContext } from './context/layoutcontext';
import { MenuProvider } from './context/menucontext';
import Link from 'next/link';

const AppMenu = () => {
    const { layoutConfig } = useContext(LayoutContext);
    const contextPath = getConfig().publicRuntimeConfig.contextPath;
    const model = [
        {
            label: 'Home',
            items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/' }]
        },
        {
            label: 'SISTEMA',
            items: [
                { label: 'ROLES', icon: 'pi pi-fw pi-globe', to: '/uikit/formlayout' },
                { label: 'ESPECIALIDAD', icon: 'pi pi-fw pi-bolt', to: '/uikit/input' },
                { label: 'CONSULTORIO', icon: 'pi pi-fw pi-building', to: '/uikit/invalidstate' },
                { label: 'USUARIOS', icon: 'pi pi-fw pi-users', to: '/uikit/floatlabel' },
                { label: 'CITAS', icon: 'pi pi-fw pi-calendar', to: '/uikit/calendar'},
                { label: 'REPORTES', icon: 'pi pi-fw pi-file', to: '/uikit/list' },
            ]
        },
    ];

    return (
        <MenuProvider>
            <ul className="layout-menu">
                {model.map((item, i) => {
                    return !item.seperator ? <AppMenuitem item={item} root={true} index={i} key={item.label} /> : <li className="menu-separator"></li>;
                })}
            </ul>
        </MenuProvider>
    );
};

export default AppMenu;
