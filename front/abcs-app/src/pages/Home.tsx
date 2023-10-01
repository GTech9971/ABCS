import { IonContent, IonGrid, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import { BaseMap } from '@/features/maps/components/BaseMap';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          <BaseMap />
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
