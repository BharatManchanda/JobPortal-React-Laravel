import React from 'react';
import { Routes, Route } from 'react-router';
import {PublicRoute, AdminRoute} from './Route';
import GernalLayout from './Components/GernalLayout';
import AuthenticatedLayout from './Components/AdminLayout';
import { AdminMiddleware } from './Route/Middlewares';

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
                            <AdminMiddleware>
                                <AuthenticatedLayout>
                                    {value.component}
                                </AuthenticatedLayout>
                            </AdminMiddleware>
                        }
                    />
                ))}
            </Routes>
        </React.Fragment>
    );
}