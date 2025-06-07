import { Vehicle, Personnel, EquipmentItem } from '../types';

export const mockVehicles: Vehicle[] = [
  {
    id: 'v1',
    name: 'VSAV 1',
    type: 'Véhicule de Secours et d\'Assistance aux Victimes',
    registration: 'AB-123-CD',
    lastCheck: '2024-07-20',
    photoUrl: 'https://images.pexels.com/photos/263230/pexels-photo-263230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Ambulance
    equipmentCategories: [
      {
        id: 'cat1',
        name: 'Matériel de Secours à Personnes',
        items: [
          { id: 'item1', name: 'Brancard', status: 'ok', photoUrl: 'https://images.pexels.com/photos/6758430/pexels-photo-6758430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
          { id: 'item2', name: 'Sac de secours', status: 'ok', photoUrl: 'https://images.pexels.com/photos/6758430/pexels-photo-6758430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
          { id: 'item3', name: 'Défibrillateur', status: 'ok', photoUrl: 'https://images.pexels.com/photos/6758430/pexels-photo-6758430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
          { id: 'item4', name: 'Colliers cervicaux (lot)', status: 'missing', notes: 'Manque taille enfant', photoUrl: 'https://images.pexels.com/photos/6758430/pexels-photo-6758430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
          { id: 'item5', name: 'Attelles (lot)', status: 'ok', photoUrl: 'https://images.pexels.com/photos/6758430/pexels-photo-6758430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
          { id: 'item6', name: 'Kit de pansements', status: 'ok', photoUrl: 'https://images.pexels.com/photos/6758430/pexels-photo-6758430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
          { id: 'item7', name: 'Bouteille d\'oxygène', status: 'ok', photoUrl: 'https://images.pexels.com/photos/6758430/pexels-photo-6758430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
          { id: 'item8', name: 'Aspirateur de mucosités', status: 'ok', photoUrl: 'https://images.pexels.com/photos/6758430/pexels-photo-6758430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
          { id: 'item9', name: 'Couverture de survie', status: 'ok', photoUrl: 'https://images.pexels.com/photos/6758430/pexels-photo-6758430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
          { id: 'item10', name: 'Lampe frontale', status: 'ok', photoUrl: 'https://images.pexels.com/photos/6758430/pexels-photo-6758430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
        ],
      },
      {
        id: 'cat2',
        name: 'Matériel de Protection',
        items: [
          { id: 'item11', name: 'Gants de protection (boîte)', status: 'ok', photoUrl: 'https://images.pexels.com/photos/6758430/pexels-photo-6758430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
          { id: 'item12', name: 'Masques FFP2 (boîte)', status: 'ok', photoUrl: 'https://images.pexels.com/photos/6758430/pexels-photo-6758430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
          { id: 'item13', name: 'Lunettes de protection', status: 'damaged', notes: 'Rayées', photoUrl: 'https://images.pexels.com/photos/6758430/pexels-photo-6758430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
          { id: 'item14', name: 'Combinaison de protection', status: 'ok', photoUrl: 'https://images.pexels.com/photos/6758430/pexels-photo-6758430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
        ],
      },
      {
        id: 'cat3',
        name: 'Matériel de Signalisation',
        items: [
          { id: 'item15', name: 'Cône de signalisation (x4)', status: 'ok', photoUrl: 'https://images.pexels.com/photos/6758430/pexels-photo-6758430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
          { id: 'item16', name: 'Gilet haute visibilité (x2)', status: 'ok', photoUrl: 'https://images.pexels.com/photos/6758430/pexels-photo-6758430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
          { id: 'item17', name: 'Lampe de signalisation', status: 'ok', photoUrl: 'https://images.pexels.com/photos/6758430/pexels-photo-6758430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
        ],
      },
    ],
  },
  {
    id: 'v2',
    name: 'FPTL 2',
    type: 'Fourgon Pompe Tonne Léger',
    registration: 'EF-456-GH',
    lastCheck: '2024-07-19',
    photoUrl: 'https://images.pexels.com/photos/1616089/pexels-photo-1616089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Fire truck
    equipmentCategories: [
      {
        id: 'cat4',
        name: 'Matériel Incendie',
        items: [
          { id: 'item18', name: 'Lance à incendie (DN45)', status: 'ok', photoUrl: 'https://images.pexels.com/photos/6758430/pexels-photo-6758430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
          { id: 'item19', name: 'Tuyaux (lot)', status: 'ok', photoUrl: 'https://images.pexels.com/photos/6758430/pexels-photo-6758430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
          { id: 'item20', name: 'Division', status: 'ok', photoUrl: 'https://images.pexels.com/photos/6758430/pexels-photo-6758430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
          { id: 'item21', name: 'Extincteur CO2', status: 'ok', photoUrl: 'https://images.pexels.com/photos/6758430/pexels-photo-6758430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
          { id: 'item22', name: 'Extincteur à poudre', status: 'ok', photoUrl: 'https://images.pexels.com/photos/6758430/pexels-photo-6758430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
          { id: 'item23', name: 'Coupure de gaz', status: 'ok', photoUrl: 'https://images.pexels.com/photos/6758430/pexels-photo-6758430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
          { id: 'item24', name: 'Coupure électrique', status: 'ok', photoUrl: 'https://images.pexels.com/photos/6758430/pexels-photo-6758430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
        ],
      },
      {
        id: 'cat5',
        name: 'Matériel de Désincarcération',
        items: [
          { id: 'item25', name: 'Écarteur hydraulique', status: 'ok', photoUrl: 'https://images.pexels.com/photos/6758430/pexels-photo-6758430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
          { id: 'item26', name: 'Cisaille hydraulique', status: 'ok', photoUrl: 'https://images.pexels.com/photos/6758430/pexels-photo-6758430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
          { id: 'item27', name: 'Vérin hydraulique', status: 'missing', photoUrl: 'https://images.pexels.com/photos/6758430/pexels-photo-6758430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
          { id: 'item28', name: 'Stabilisateur', status: 'ok', photoUrl: 'https://images.pexels.com/photos/6758430/pexels-photo-6758430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
        ],
      },
    ],
  },
  {
    id: 'v3',
    name: 'VL 3',
    type: 'Véhicule Léger',
    registration: 'IJ-789-KL',
    lastCheck: '2024-07-21',
    photoUrl: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Light vehicle
    equipmentCategories: [
      {
        id: 'cat6',
        name: 'Matériel Administratif',
        items: [
          { id: 'item29', name: 'Radio portative', status: 'ok', photoUrl: 'https://images.pexels.com/photos/6758430/pexels-photo-6758430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
          { id: 'item30', name: 'Tablette', status: 'ok', photoUrl: 'https://images.pexels.com/photos/6758430/pexels-photo-6758430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
          { id: 'item31', name: 'Carnet de bord', status: 'ok', photoUrl: 'https://images.pexels.com/photos/6758430/pexels-photo-6758430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
        ],
      },
    ],
  },
  {
    id: 'v4',
    name: 'CCF 4',
    type: 'Camion Citerne Feux de Forêts',
    registration: 'MN-012-OP',
    lastCheck: '2024-07-18',
    photoUrl: 'https://images.pexels.com/photos/1616089/pexels-photo-1616089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Fire truck
    equipmentCategories: [
      {
        id: 'cat7',
        name: 'Matériel Feux de Forêts',
        items: [
          { id: 'item32', name: 'Lance à débit variable', status: 'ok', photoUrl: 'https://images.pexels.com/photos/6758430/pexels-photo-6758430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
          { id: 'item33', name: 'Tuyaux gros diamètre', status: 'ok', photoUrl: 'https://images.pexels.com/photos/6758430/pexels-photo-6758430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
          { id: 'item34', name: 'Motopompe', status: 'ok', photoUrl: 'https://images.pexels.com/photos/6758430/pexels-photo-6758430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
          { id: 'item35', name: 'Hache', status: 'ok', photoUrl: 'https://images.pexels.com/photos/6758430/pexels-photo-6758430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
          { id: 'item36', name: 'Pelle', status: 'ok', photoUrl: 'https://images.pexels.com/photos/6758430/pexels-photo-6758430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
        ],
      },
    ],
  },
  {
    id: 'v5',
    name: 'VSR 5',
    type: 'Véhicule de Secours Routier',
    registration: 'QR-345-ST',
    lastCheck: '2024-07-20',
    photoUrl: 'https://images.pexels.com/photos/386009/pexels-photo-386009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Rescue vehicle
    equipmentCategories: [
      {
        id: 'cat8',
        name: 'Matériel de Secours Routier',
        items: [
          { id: 'item37', name: 'Groupe électrogène', status: 'ok', photoUrl: 'https://images.pexels.com/photos/6758430/pexels-photo-6758430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
          { id: 'item38', name: 'Éclairage de chantier', status: 'ok', photoUrl: 'https://images.pexels.com/photos/6758430/pexels-photo-6758430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
          { id: 'item39', name: 'Tronçonneuse', status: 'damaged', notes: 'Chaîne émoussée', photoUrl: 'https://images.pexels.com/photos/6758430/pexels-photo-6758430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
          { id: 'item40', name: 'Scie sabre', status: 'ok', photoUrl: 'https://images.pexels.com/photos/6758430/pexels-photo-6758430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
        ],
      },
    ],
  },
];

export const mockPersonnel: Personnel[] = [
  {
    id: 'p1',
    name: 'Jean Dupont',
    role: 'Chef d\'agrès',
    status: 'available',
    photoUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 'p2',
    name: 'Marie Curie',
    role: 'Sapeur',
    status: 'on-mission',
    photoUrl: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 'p3',
    name: 'Pierre Martin',
    role: 'Conducteur',
    status: 'available',
    photoUrl: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 'p4',
    name: 'Sophie Dubois',
    role: 'Infirmière',
    status: 'off-duty',
    photoUrl: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 'p5',
    name: 'Marc Lefevre',
    role: 'Sapeur',
    status: 'available',
    photoUrl: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

// Flatten all equipment items from vehicles into a single list for management
export const mockAllEquipmentItems: EquipmentItem[] = mockVehicles.flatMap(vehicle =>
  vehicle.equipmentCategories.flatMap(category => category.items)
).filter((item, index, self) =>
  index === self.findIndex((t) => t.id === item.id) // Remove duplicates based on ID
);
