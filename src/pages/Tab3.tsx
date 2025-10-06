import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Sobre o Projeto</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h2>Descrição</h2>
        <p>Este aplicativo foi desenvolvido como parte da Avaliação Formadora 2, utilizando o framework Ionic 7.</p>
        <p>Ele contém três páginas: Apresentação, API e Sobre.</p>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
