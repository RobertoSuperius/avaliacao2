import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonSpinner, IonSearchbar } from '@ionic/react';
import { useEffect, useState } from 'react';

type Champion = {
  id: string;
  name: string;
  title: string;
};

const Tab2: React.FC = () => {
  const [champions, setChampions] = useState<Champion[]>([]);
  const [filteredChampions, setFilteredChampions] = useState<Champion[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const fetchChampions = async () => {
      try {
        const res = await fetch('https://ddragon.leagueoflegends.com/cdn/12.4.1/data/pt_BR/champion.json');
        const data = await res.json();
        const champs = Object.values(data.data) as Champion[];
        setChampions(champs);
        setFilteredChampions(champs);
      } catch (err) {
        console.error(err);
        setError('Erro ao carregar campeões.');
      } finally {
        setLoading(false);
      }
    };

    fetchChampions();
  }, []);

  const handleSearch = (event: CustomEvent) => {
    const text = event.detail.value.toLowerCase();
    setSearchText(text);
    const filtered = champions.filter(champ => champ.name.toLowerCase().includes(text));
    setFilteredChampions(filtered);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Campeões (LoL)</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonSearchbar 
          value={searchText} 
          onIonInput={handleSearch} 
          placeholder="Pesquisar campeão..."
        />

        {loading ? (
          <div className="ion-text-center" style={{ marginTop: '50%' }}>
            <IonSpinner name="dots" />
            <p>Carregando campeões...</p>
          </div>
        ) : error ? (
          <p>{error}</p>
        ) : filteredChampions.length === 0 ? (
          <p className="ion-text-center">Nenhum campeão encontrado.</p>
        ) : (
          filteredChampions.map(champion => (
            <IonCard key={champion.id}>
              <img
                src={`https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/${champion.id}.png`}
                alt={champion.name}
              />
              <IonCardHeader>
                <IonCardTitle>{champion.name}</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>{champion.title}</IonCardContent>
            </IonCard>
          ))
        )}
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
