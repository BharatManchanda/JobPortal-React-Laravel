import React from 'react';
import Header from './Header';
import Footer from './Footer';
export default function GernalLayout({children}){
    return(
        <React.Fragment>
            <div style={{margin:"50px"}}>
                <Header />
                    {children}
                <Footer />
            </div>
        </React.Fragment>
    );
}