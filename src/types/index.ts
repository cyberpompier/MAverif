export interface EquipmentItem {
  id: string;
  name: string;
  status: 'ok' | 'missing' | 'damaged';
  notes?: string;
  photoUrl?: string;
}

export interface EquipmentCategory {
  id: string;
  name: string;
  items: EquipmentItem[];
}

export interface Vehicle {
  id: string;
  name: string;
  type: string;
  registration: string;
  lastCheck: string;
  equipmentCategories: EquipmentCategory[];
  photoUrl: string;
}

export interface Personnel {
  id: string;
  name: string;
  role: string;
  status: 'available' | 'on-mission' | 'off-duty';
  photoUrl?: string;
}
