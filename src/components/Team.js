import React from 'react'

import team from '../assets/images/team.png';
import marines from '../assets/images/marines.png';
import luzia from '../assets/images/luzia.png';
import '../styles/team.css';

const Team = () => {
  return (
    <div id="team-wrapper">
      <h1>A nossa equipa</h1>
      <img alt="equipa" src={team} />
      <p className="content-text">Com uma equipa que o atenderá sempre com um
        sorriso na cara e boa disposição, voltar vai ser tarefa fácil! Com mais
        de 50 anos de experiência profissional entre as duas assim como variados
        certificados e formações oficalmente reconhecidos saiba que estará sempre
        em boas mãos, basta perguntar ao grande leque de clientes que as segue
        há ínumeros anos!
      </p>
      <div id="portraits-wrapper">
        <div id="portrait-1">
          <p>Marinês Oliveira</p>
          <img alt="marines" src={marines} />
        </div>
        <div id="portrait-2">
          <p>Luzia Ferreira</p>
          <img alt="luzia" src={luzia} />
        </div>
      </div>
    </div>
  )
}

export default Team
