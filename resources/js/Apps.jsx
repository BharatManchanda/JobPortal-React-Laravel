import React from 'react';
import { Routes, Route } from 'react-router';
import {PublicRoute} from './Route';
import GernalLayout from './Components/GernalLayout';

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
                        >
                    </Route>
                ))}
            </Routes>
        </React.Fragment>
    );
}