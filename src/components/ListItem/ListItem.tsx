import React from 'react';
import { useHistory, useParams } from 'react-router';
import { NODE } from '../../api/graphqlQueryTypes';
import { Language } from '../Language/Language';
import { Stargazer } from '../Stargazer/Stargazer';
import { Title } from '../Title/Title';
import './ListItem.css';

interface Props {
    repositories: NODE[]
    repositoriesCount: number
    scrollToEnd: () => void
}

interface ListItemParams {
    id: string
}

export function ListItem ({repositories, repositoriesCount, scrollToEnd}: Props) {
    const history = useHistory();
    window.onscroll = function () {}
    const params = useParams<ListItemParams>()
    console.log(repositories.find((repository) => repository.node.id === params.id)?.node)
    const repository = repositories.find((repository) => repository.node.id === params.id)?.node;
    const backButtonHandler = () => {
        window.onscroll = function () {
            if(
              window.innerHeight + document.documentElement.scrollTop ===
              document.documentElement.offsetHeight 
              && repositories.length === repositoriesCount
            ) {
                scrollToEnd()
            }
          }
        history.push(`/search`);
    }

    return (
        <>
            {repository && (
                <>
                <div className='listItem__header'>
                    <button onClick={() => backButtonHandler()}>Назад</button>
                    <h3>Информация о репозитории</h3>
                </div>
                    <div className='listItem__info'>
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
                        <p>Pull Requests: {repository.pullRequests.totalCount}</p>
                        <p>Issues: {repository.issues.totalCount}</p>
                        <p>Languages in use:</p>
                        {repository.languages.nodes.map((language)=> (
                            <Language color={language.color} name={language.name} />
                        ))}
                    </div>
                </>
            )}
        </>
    )
}