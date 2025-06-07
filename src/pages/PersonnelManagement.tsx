import { useState } from 'react';
import { PlusCircle, Edit, Trash2, UserPlus, Save, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { mockPersonnel } from '@/data/mockData';
import { Personnel } from '@/types';
import { toast } from '@/hooks/use-toast';

export function PersonnelManagement() {
  const [personnelList, setPersonnelList] = useState<Personnel[]>(mockPersonnel);
  const [editingPersonnel, setEditingPersonnel] = useState<Personnel | null>(null);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [newPersonnel, setNewPersonnel] = useState<Omit<Personnel, 'id'>>({
    name: '',
    role: '',
    status: 'available',
    photoUrl: '',
  });

  const handleEditClick = (personnel: Personnel) => {
    setEditingPersonnel({ ...personnel });
    setIsAddingNew(false);
  };

  const handleDeleteClick = (id: string) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer ce personnel ?')) {
      setPersonnelList(personnelList.filter((p) => p.id !== id));
      toast({
        title: "Personnel supprimé",
        description: "Le personnel a été supprimé avec succès.",
        variant: "destructive",
      });
    }
  };

  const handleSaveEdit = () => {
    if (editingPersonnel) {
      setPersonnelList(
        personnelList.map((p) => (p.id === editingPersonnel.id ? editingPersonnel : p))
      );
      setEditingPersonnel(null);
      toast({
        title: "Personnel modifié",
        description: `${editingPersonnel.name} a été mis à jour.`,
        variant: "default",
      });
    }
  };

  const handleAddPersonnel = () => {
    if (newPersonnel.name && newPersonnel.role) {
      const id = `p${personnelList.length + 1}`; // Simple ID generation
      setPersonnelList([...personnelList, { id, ...newPersonnel }]);
      setNewPersonnel({ name: '', role: '', status: 'available', photoUrl: '' });
      setIsAddingNew(false);
      toast({
        title: "Personnel ajouté",
        description: `${newPersonnel.name} a été ajouté.`,
        variant: "default",
      });
    } else {
      toast({
        title: "Erreur",
        description: "Le nom et le rôle sont obligatoires.",
        variant: "destructive",
      });
    }
  };

  const getStatusColor = (status: Personnel['status']) => {
    switch (status) {
      case 'available':
        return 'bg-green-100 text-green-800';
      case 'on-mission':
        return 'bg-blue-100 text-blue-800';
      case 'off-duty':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="container mx-auto p-4 md:p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-red-700">Gestion du Personnel</h1>
        <Button onClick={() => { setIsAddingNew(true); setEditingPersonnel(null); setNewPersonnel({ name: '', role: '', status: 'available', photoUrl: '' }); }}>
          <UserPlus className="h-4 w-4 mr-2" /> Ajouter un Personnel
        </Button>
      </div>

      {isAddingNew && (
        <Card className="mb-6 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-red-600">Nouveau Personnel</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="newName">Nom</Label>
                <Input
                  id="newName"
                  value={newPersonnel.name}
                  onChange={(e) => setNewPersonnel({ ...newPersonnel, name: e.target.value })}
                  placeholder="Nom du personnel"
                />
              </div>
              <div>
                <Label htmlFor="newRole">Rôle</Label>
                <Input
                  id="newRole"
                  value={newPersonnel.role}
                  onChange={(e) => setNewPersonnel({ ...newPersonnel, role: e.target.value })}
                  placeholder="Rôle (ex: Chef d'agrès)"
                />
              </div>
              <div>
                <Label htmlFor="newStatus">Statut</Label>
                <Select
                  value={newPersonnel.status}
                  onValueChange={(value: 'available' | 'on-mission' | 'off-duty') => setNewPersonnel({ ...newPersonnel, status: value })}
                >
                  <SelectTrigger id="newStatus">
                    <SelectValue placeholder="Sélectionner un statut" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="available">Disponible</SelectItem>
                    <SelectItem value="on-mission">En mission</SelectItem>
                    <SelectItem value="off-duty">Hors service</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="newPhotoUrl">URL Photo</Label>
                <Input
                  id="newPhotoUrl"
                  value={newPersonnel.photoUrl || ''}
                  onChange={(e) => setNewPersonnel({ ...newPersonnel, photoUrl: e.target.value })}
                  placeholder="URL de la photo (optionnel)"
                />
              </div>
            </div>
            <div className="flex justify-end space-x-2 mt-4">
              <Button variant="outline" onClick={() => setIsAddingNew(false)}>
                <X className="h-4 w-4 mr-2" /> Annuler
              </Button>
              <Button onClick={handleAddPersonnel}>
                <PlusCircle className="h-4 w-4 mr-2" /> Ajouter
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {personnelList.map((personnel) => (
          <Card key={personnel.id} className="shadow-md">
            <CardContent className="p-4">
              {editingPersonnel?.id === personnel.id ? (
                // Edit form
                <div className="space-y-3">
                  <div>
                    <Label htmlFor={`editName-${personnel.id}`}>Nom</Label>
                    <Input
                      id={`editName-${personnel.id}`}
                      value={editingPersonnel.name}
                      onChange={(e) =>
                        setEditingPersonnel({ ...editingPersonnel, name: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor={`editRole-${personnel.id}`}>Rôle</Label>
                    <Input
                      id={`editRole-${personnel.id}`}
                      value={editingPersonnel.role}
                      onChange={(e) =>
                        setEditingPersonnel({ ...editingPersonnel, role: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor={`editStatus-${personnel.id}`}>Statut</Label>
                    <Select
                      value={editingPersonnel.status}
                      onValueChange={(value: 'available' | 'on-mission' | 'off-duty') =>
                        setEditingPersonnel({ ...editingPersonnel, status: value })
                      }
                    >
                      <SelectTrigger id={`editStatus-${personnel.id}`}>
                        <SelectValue placeholder="Sélectionner un statut" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="available">Disponible</SelectItem>
                        <SelectItem value="on-mission">En mission</SelectItem>
                        <SelectItem value="off-duty">Hors service</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor={`editPhotoUrl-${personnel.id}`}>URL Photo</Label>
                    <Input
                      id={`editPhotoUrl-${personnel.id}`}
                      value={editingPersonnel.photoUrl || ''}
                      onChange={(e) =>
                        setEditingPersonnel({ ...editingPersonnel, photoUrl: e.target.value })
                      }
                    />
                  </div>
                  <div className="flex justify-end space-x-2 mt-4">
                    <Button variant="outline" onClick={() => setEditingPersonnel(null)}>
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
                  {personnel.photoUrl && (
                    <img
                      src={personnel.photoUrl}
                      alt={personnel.name}
                      className="h-16 w-16 rounded-full object-cover border-2 border-red-500 shadow-sm"
                    />
                  )}
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-gray-800">{personnel.name}</h3>
                    <p className="text-muted-foreground">{personnel.role}</p>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium mt-1 ${getStatusColor(personnel.status)}`}>
                      {personnel.status === 'available' && 'Disponible'}
                      {personnel.status === 'on-mission' && 'En mission'}
                      {personnel.status === 'off-duty' && 'Hors service'}
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="icon" onClick={() => handleEditClick(personnel)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="destructive" size="icon" onClick={() => handleDeleteClick(personnel.id)}>
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
