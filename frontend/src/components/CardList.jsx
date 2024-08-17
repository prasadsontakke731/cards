/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Card from './Card'
import { fetchCards } from '../services/api';


function CardList() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetchCards().then(data => setCards(data));
    }, []);
    return (
        // <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        //     {cards.map(card => (
        //         <Card key={card._id} title={card.title} description={card.description} />
        //     ))}

        // </div>
        <main className="flex-grow bg-purple-100 p-8">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">How can we help?</h1>
                <div className="relative w-1/2 mx-auto">
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full p-4 rounded-full border border-gray-300"
                    />
                    <button className="absolute top-0 right-0 mt-4 mr-4 text-gray-500">
                        ➔
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
                <Card title="Branches" description="Abstract Branches lets you manage, version, and document your designs in one place." />
                <Card title="Manage your account" description="Configure your account settings, such as your email, profile details, and password." />
                <Card title="Manage organizations, teams, and projects" description="Use Abstract organizations, teams, and projects to organize your people and your work." />
                <Card title="Manage billing" description="Change subscriptions and payment details." />
                <Card title="Authenticate to Abstract" description="Set up and configure SSO, SCIM, and Just-in-Time provisioning." />
                <Card title="Abstract support" description="Get in touch with a human." />
            </div>
        </main>
    )
}

export default CardList