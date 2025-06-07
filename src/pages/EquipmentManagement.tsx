import { useState } from 'react';
import { PlusCircle, Edit, Trash2, Wrench, Save, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { mockAllEquipmentItems } from '@/data/mockData';
import { EquipmentItem } from '@/types';
import { toast } from '@/hooks/use-toast';

export function EquipmentManagement() {
  const [equipmentList, setEquipmentList] = useState<EquipmentItem[]>(mockAllEquipmentItems);
  const [editingEquipment, setEditingEquipment] = useState<EquipmentItem | null>(null);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [newEquipment, setNewEquipment] = useState<Omit<EquipmentItem, 'id'>>({
    name: '',
    status: 'ok',
    notes: '',
    photoUrl: '',
  });

  const handleEditClick = (equipment: EquipmentItem) => {
    setEditingEquipment({ ...equipment });
    setIsAddingNew(false);
  };

  const handleDeleteClick = (id: string) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer ce matériel ?')) {
      setEquipmentList(equipmentList.filter((e) => e.id !== id));
      toast({
        title: "Matériel supprimé",
        description: "Le matériel a été supprimé avec succès.",
        variant: "destructive",
      });
    }
  };

  const handleSaveEdit = () => {
    if (editingEquipment) {
      setEquipmentList(
        equipmentList.map((e) => (e.id === editingEquipment.id ? editingEquipment : e))
      );
      setEditingEquipment(null);
      toast({
        title: "Matériel modifié",
        description: `${editingEquipment.name} a été mis à jour.`,
        variant: "default",
      });
    }
  };

  const handleAddEquipment = () => {
    if (newEquipment.name) {
      const id = `item${equipmentList.length + 1}`; // Simple ID generation
      setEquipmentList([...equipmentList, { id, ...newEquipment }]);
      setNewEquipment({ name: '', status: 'ok', notes: '', photoUrl: '' });
      setIsAddingNew(false);
      toast({
        title: "Matériel ajouté",
        description: `${newEquipment.name} a été ajouté.`,
        variant: "default",
      });
    } else {
      toast({
        title: "Erreur",
        description: "Le nom du matériel est obligatoire.",
        variant: "destructive",
      });
    }
  };

  const getStatusColor = (status: EquipmentItem['status']) => {
    switch (status) {
      case 'ok':
        return 'bg-green-100 text-green-800';
      case 'missing':
        return 'bg-red-100 text-red-800';
      case 'damaged':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="container mx-auto p-4 md:p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-red-700">Gestion du Matériel</h1>
        <Button onClick={() => { setIsAddingNew(true); setEditingEquipment(null); setNewEquipment({ name: '', status: 'ok', notes: '', photoUrl: '' }); }}>
          <PlusCircle className="h-4 w-4 mr-2" /> Ajouter un Matériel
        </Button>
      </div>

      {isAddingNew && (
        <Card className="mb-6 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-red-600">Nouveau Matériel</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="newName">Nom</Label>
                <Input
                  id="newName"
                  value={newEquipment.name}
                  onChange={(e) => setNewEquipment({ ...newEquipment, name: e.target.value })}
                  placeholder="Nom du matériel"
                />
              </div>
              <div>
                <Label htmlFor="newStatus">Statut Initial</Label>
                <Select
                  value={newEquipment.status}
                  onValueChange={(value: 'ok' | 'missing' | 'damaged') => setNewEquipment({ ...newEquipment, status: value })}
                >
                  <SelectTrigger id="newStatus">
                    <SelectValue placeholder="Sélectionner un statut" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ok">OK</SelectItem>
                    <SelectItem value="missing">Manquant</SelectItem>
                    <SelectItem value="damaged">Endommagé</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="newNotes">Notes</Label>
                <Textarea
                  id="newNotes"
                  value={newEquipment.notes || ''}
                  onChange={(e) => setNewEquipment({ ...newEquipment, notes: e.target.value })}
                  placeholder="Notes sur le matériel (optionnel)"
                />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="newPhotoUrl">URL Photo</Label>
                <Input
                  id="newPhotoUrl"
                  value={newEquipment.photoUrl || ''}
                  onChange={(e) => setNewEquipment({ ...newEquipment, photoUrl: e.target.value })}
                  placeholder="URL de la photo (optionnel)"
                />
              </div>
            </div>
            <div className="flex justify-end space-x-2 mt-4">
              <Button variant="outline" onClick={() => setIsAddingNew(false)}>
                <X className="h-4 w-4 mr-2" /> Annuler
              </Button>
              <Button onClick={handleAddEquipment}>
                <PlusCircle className="h-4 w-4 mr-2" /> Ajouter
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {equipmentList.map((equipment) => (
          <Card key={equipment.id} className="shadow-md">
            <CardContent className="p-4">
              {editingEquipment?.id === equipment.id ? (
                // Edit form
                <div className="space-y-3">
                  <div>
                    <Label htmlFor={`editName-${equipment.id}`}>Nom</Label>
                    <Input
                      id={`editName-${equipment.id}`}
                      value={editingEquipment.name}
                      onChange={(e) =>
                        setEditingEquipment({ ...editingEquipment, name: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor={`editStatus-${equipment.id}`}>Statut</Label>
                    <Select
                      value={editingEquipment.status}
                      onValueChange={(value: 'ok' | 'missing' | 'damaged') =>
                        setEditingEquipment({ ...editingEquipment, status: value })
                      }
                    >
                      <SelectTrigger id={`editStatus-${equipment.id}`}>
                        <SelectValue placeholder="Sélectionner un statut" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ok">OK</SelectItem>
                        <SelectItem value="missing">Manquant</SelectItem>
                        <SelectItem value="damaged">Endommagé</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor={`editNotes-${equipment.id}`}>Notes</Label>
                    <Textarea
                      id={`editNotes-${equipment.id}`}
                      value={editingEquipment.notes || ''}
                      onChange={(e) =>
                        setEditingEquipment({ ...editingEquipment, notes: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor={`editPhotoUrl-${equipment.id}`}>URL Photo</Label>
                    <Input
                      id={`editPhotoUrl-${equipment.id}`}
                      value={editingEquipment.photoUrl || ''}
                      onChange={(e) =>
                        setEditingEquipment({ ...editingEquipment, photoUrl: e.target.value })
                      }
                    />
                  </div>
                  <div className="flex justify-end space-x-2 mt-4">
                    <Button variant="outline" onClick={() => setEditingEquipment(null)}>
                      <X className="h-4 w-4 mr-2" /> Annuler
                    </Button>
                    <Button onClick={handleSaveEdit}>
                      <Save className="h-4 w-4 mr-2" /> Enregistrer
                    </Button>
                  </div>
                </div>
              ) : (
                // Display mode
                <div className="flex items-center space-x-4">
                  {equipment.photoUrl && (
                    <img
                      src={equipment.photoUrl}
                      alt={equipment.name}
                      className="h-16 w-16 rounded-full object-cover border-2 border-blue-500 shadow-sm"
                    />
                  )}
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-gray-800">{equipment.name}</h3>
                    <p className="text-muted-foreground">Notes: {equipment.notes || 'Aucune'}</p>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium mt-1 ${getStatusColor(equipment.status)}`}>
                      {equipment.status === 'ok' && 'OK'}
                      {equipment.status === 'missing' && 'Manquant'}
                      {equipment.status === 'damaged' && 'Endommagé'}
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="icon" onClick={() => handleEditClick(equipment)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="destructive" size="icon" onClick={() => handleDeleteClick(equipment.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
