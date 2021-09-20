import React from "react";

interface Props {
    login: string
    name: string
}

export function Title ({login, name}: Props) {
    return (
        <p className='repositoryCard__ownerAndName'>{login}/{name}</p>
    )
}