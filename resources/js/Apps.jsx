import React from 'react';
import { Routes, Route } from 'react-router';
import {PublicRoute, AdminRoute} from './Route';
import GernalLayout from './Components/GernalLayout';
import AuthenticatedLayout from './Components/AdminLayout';

export default function Apps() {
    return (
        <React.Fragment>
            <Routes>
                {PublicRoute.map((value, index) => (
                    <Route key={index}
                        path={value.path}
                        element={
                            <GernalLayout>
                                {value.component}
                            </GernalLayout>
                            }
                    />
                ))}

                {AdminRoute.map((value, index) => (
                    <Route key={index}
                        path={value.path}
                        element={
                            <AuthenticatedLayout>
                                {value.component}
                            </AuthenticatedLayout>
                        }
                    />
                ))}
            </Routes>
        </React.Fragment>
    );
}