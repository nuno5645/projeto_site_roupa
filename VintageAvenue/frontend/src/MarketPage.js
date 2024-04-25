import React from 'react';
import './MarketPage.css'; // Ensure this CSS has the styles you've mentioned

const MarketPage = () => {
    const marketItems = [
        { id: 1, name: 'mala miu miu', likes: 67, imageUrl: 'path-to-miu-miu-image' },
        { id: 2, name: 'casaco chanel', likes: 12, imageUrl: 'path-to-chanel-coat-image' },
        { id: 3, name: 'mala chanel', likes: 67, imageUrl: 'path-to-chanel-bag-image' },
    ];

    return (
        <div className="market-container">
            <nav className="navbar navbar-expand-lg navbar-custom">
                <div className="container">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <main className="market-grid">
                {marketItems.map(item => (
                    <div key={item.id} className="market-item">
                        <img src={item.imageUrl} alt={item.name} />
                        <p>{item.name}</p>
                        <span>{item.likes} ♥</span>
                    </div>
                ))}
                <div className="add-item">
                    <button>ADICIONAR ITEM</button>
                </div>
            </main>
        </div>
    );
};

export default MarketPage;