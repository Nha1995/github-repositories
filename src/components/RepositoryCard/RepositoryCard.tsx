import React  from 'react';
import { REPOSITORY } from '../../api/graphqlQueryTypes';
import { Language } from '../Language/Language';
import { Stargazer } from '../Stargazer/Stargazer';
import { Title } from '../Title/Title';
import './RepositoryCard.css';

interface Props {
    repository: REPOSITORY,
    onClick:(item: REPOSITORY) => void
}

export function RepositoryCard({repository, onClick}: Props) {
  return (
    <div className='repositoryCard' onClick={() => onClick(repository)}>
        <Title 
            login={repository.owner.login}
            name={repository.name}
        />
        <p className='repositoryCard__description'>{repository.description}</p>
        <div className='repositoryCard__primaryLangAndStar'>
        {repository.primaryLanguage && <Language 
            color ={repository.primaryLanguage.color} 
            name={repository.primaryLanguage.name}/> 
        }
        <Stargazer stargazerCount={repository.stargazerCount} />
        </div>

            {/* <span><b>primaryLanguage:</b> {repository.primaryLanguage && repository.primaryLanguage.color}</span> <br />
            <span>pullRequestsCount: {repository.pullRequests && repository.pullRequests.totalCount}</span> <br />
            <span>issues: {repository.issues && repository.issues.totalCount}</span> */}
    </div>
    )
}