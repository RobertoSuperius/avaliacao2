import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/react';
import './Tab1.css';
import FotoAluno from '../assets/image.png'; // ajuste conforme seu caminho

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Apresentação</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonContent className="apresentacao">
        <IonCard className="card-centralizado">
          <IonCardHeader>
            <IonCardTitle>Avaliação formadora 2</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p><strong>Aluno:</strong> Roberto dos Santos Pinto Filho</p>
            <p><strong>Turma:</strong> ADS - Unisuam</p>
            <p><strong>Horário:</strong> Noite</p>
            <img src="src/image.png" alt="Foto do aluno" className="foto" />
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
