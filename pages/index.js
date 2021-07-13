import Box from '../src/components/Box';
import MainGrid from '../src/components/MainGrid';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/libs/AlurakutCommons';

function ProfileSidebar(props) {
  console.log(props)
  return (
    <Box>
      <img src={`https://github.com/${props.githubUser}.png`} style={{ borderRadius: '8px' }}></img>
    </Box>
  );
}

export default function Home() {

  const githubUser = 'diegondev';
  const pessoasFavoritas = [
    'omariosouto',
    'juunegreiros',
    'peas',
    'rafaballerini',
    'marcobrunodev'
  ]

  return (
    <>
      <AlurakutMenu></AlurakutMenu>
      <MainGrid>
        <div className="profileArea" style={{gridArea: 'profileArea'}}>
          <ProfileSidebar githubUser={githubUser} />
        </div>

        <div className="welcomeArea" style={{gridArea: 'welcomeArea'}}>
          <Box>
            <h1 className="title">Bem-Vindo(a)</h1>

            <OrkutNostalgicIconSet />
          </Box>
        </div>

        <div className="profileRelationsArea" style={{gridArea: 'profileRelationsArea'}}>
          <ProfileRelationsBoxWrapper>  
            <h2 className="smallTitle">Pessoas da comunidade ({pessoasFavoritas.length})</h2>

            <ul>
            { 
              pessoasFavoritas.map(item => {
                return (
                  <li>
                    <a href={`/users/${item}`} key={item}>
                      <img src={`https://github.com/${item}.png`}></img>
                      <span>{item}</span>
                    </a>
                  </li>
                );
              })
            }
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  );
}
