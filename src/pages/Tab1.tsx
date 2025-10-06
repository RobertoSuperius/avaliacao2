import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Apresentação</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="apresentacao">
       <div> <h1>Bem-vindo(a) ao meu app da Avaliação 2!</h1>
        <p>Aluno: Roberto dos Santos Pinto Filho</p>
        <p>Turma: ADS - Unisuam</p>
        <p>Horário: Noite</p>

        <img
          src="assets/foto-perfil.jpg"
          alt="Foto do aluno"
          className="foto"
        /></div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
