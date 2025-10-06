import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/react';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Sobre o Aluno</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonContent className="ion-padding">
  

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Descrição do Projeto</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>
              Este aplicativo foi desenvolvido como parte da Avaliação 2 do módulo de Análise e Desenvolvimento de Sistemas.
              A aplicação foi criada utilizando o <strong>Ionic 7</strong> com React, explorando rotas, componentes e consumo de APIs.
            </p>
            <p>
              A Tab1 apresenta a introdução do aluno e informações pessoais. 
              A Tab2 integra uma API de League of Legends, permitindo pesquisar campeões do jogo com imagem e título.
              A Tab3, por sua vez, fornece a identificação do aluno e uma descrição detalhada do projeto, garantindo clareza sobre o propósito e funcionalidades desenvolvidas.
            </p>
            <p>
              Este projeto demonstra habilidades em desenvolvimento frontend, integração com APIs externas, manipulação de estados em React e uso de componentes do Ionic para criar uma interface moderna e responsiva.
            </p>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
