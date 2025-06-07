import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CheckCircle2, XCircle, AlertTriangle, Save, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { mockVehicles } from '@/data/mockData';
import { EquipmentItem, EquipmentCategory, Vehicle } from '@/types';
import { toast } from '@/hooks/use-toast';

export function EquipmentCheck() {
  const { vehicleId } = useParams<{ vehicleId: string }>();
  const navigate = useNavigate();
  const vehicle = mockVehicles.find((v) => v.id === vehicleId);

  const [currentVehicle, setCurrentVehicle] = useState<Vehicle | undefined>(vehicle);

  if (!currentVehicle) {
    return (
      <div className="container mx-auto p-4 text-center text-red-500">
        Véhicule non trouvé.
        <Button onClick={() => navigate('/')} className="mt-4">Retour à la liste des véhicules</Button>
      </div>
    );
  }

  const handleStatusChange = (categoryId: string, itemId: string, newStatus: 'ok' | 'missing' | 'damaged') => {
    setCurrentVehicle((prevVehicle) => {
      if (!prevVehicle) return prevVehicle;

      const updatedCategories = prevVehicle.equipmentCategories.map((category) => {
        if (category.id === categoryId) {
          const updatedItems = category.items.map((item) =>
            item.id === itemId ? { ...item, status: newStatus } : item
          );
          return { ...category, items: updatedItems };
        }
        return category;
      });
      return { ...prevVehicle, equipmentCategories: updatedCategories };
    });
  };

  const handleNotesChange = (categoryId: string, itemId: string, newNotes: string) => {
    setCurrentVehicle((prevVehicle) => {
      if (!prevVehicle) return prevVehicle;

      const updatedCategories = prevVehicle.equipmentCategories.map((category) => {
        if (category.id === categoryId) {
          const updatedItems = category.items.map((item) =>
            item.id === itemId ? { ...item, notes: newNotes } : item
          );
          return { ...category, items: updatedItems };
        }
        return category;
      });
      return { ...prevVehicle, equipmentCategories: updatedCategories };
    });
  };

  const saveChanges = () => {
    // In a real application, you would send `currentVehicle` to a backend API.
    // For this mock, we just show a toast.
    console.log('Saving changes for vehicle:', currentVehicle);
    toast({
      title: "Vérification enregistrée",
      description: `Les modifications pour ${currentVehicle.name} ont été sauvegardées.`,
      variant: "default",
    });
    navigate('/'); // Navigate back to vehicle list after saving
  };

  return (
    <div className="container mx-auto p-4 md:p-6">
      <div className="flex items-center justify-between mb-6">
        <Button variant="outline" onClick={() => navigate('/')}>
          <ArrowLeft className="h-4 w-4 mr-2" /> Retour
        </Button>
        <h1 className="text-3xl font-bold text-red-700">Vérification: {currentVehicle.name}</h1>
        <Button onClick={saveChanges} className="bg-green-600 hover:bg-green-700">
          <Save className="h-4 w-4 mr-2" /> Enregistrer
        </Button>
      </div>

      <p className="text-lg text-muted-foreground mb-8 text-center">
        Immatriculation: {currentVehicle.registration} - Dernière vérification: {currentVehicle.lastCheck}
      </p>

      {currentVehicle.equipmentCategories.map((category) => (
        <Card key={category.id} className="mb-8 shadow-md">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-red-600">{category.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-6">
              {category.items.map((item) => (
                <div key={item.id} className="border p-4 rounded-lg shadow-sm bg-card">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3"> {/* Flex container for photo and name */}
                      {item.photoUrl && (
                        <img
                          src={item.photoUrl}
                          alt={item.name}
                          className="h-16 w-16 rounded-full object-cover border-2 border-blue-500 shadow-sm" // Doubled size
                        />
                      )}
                      <h3 className="text-lg font-medium">{item.name}</h3>
                    </div>
                    <div className="flex space-x-2">
                      <Button
                        variant={item.status === 'ok' ? 'default' : 'outline'}
                        size="sm"
                        className={item.status === 'ok' ? 'bg-green-500 hover:bg-green-600 text-white' : 'text-green-500 border-green-500 hover:bg-green-50'}
                        onClick={() => handleStatusChange(category.id, item.id, 'ok')}
                      >
                        <CheckCircle2 className="h-4 w-4 mr-1" /> OK
                      </Button>
                      <Button
                        variant={item.status === 'missing' ? 'default' : 'outline'}
                        size="sm"
                        className={item.status === 'missing' ? 'bg-red-500 hover:bg-red-600 text-white' : 'text-red-500 border-red-500 hover:bg-red-50'}
                        onClick={() => handleStatusChange(category.id, item.id, 'missing')}
                      >
                        <XCircle className="h-4 w-4 mr-1" /> Manquant
                      </Button>
                      <Button
                        variant={item.status === 'damaged' ? 'default' : 'outline'}
                        size="sm"
                        className={item.status === 'damaged' ? 'bg-yellow-500 hover:bg-yellow-600 text-white' : 'text-yellow-500 border-yellow-500 hover:bg-yellow-50'}
                        onClick={() => handleStatusChange(category.id, item.id, 'damaged')}
                      >
                        <AlertTriangle className="h-4 w-4 mr-1" /> Endommagé
                      </Button>
                    </div>
                  </div>
                  <Label htmlFor={`notes-${item.id}`} className="block text-sm font-medium text-muted-foreground mb-1">Notes:</Label>
                  <Textarea
                    id={`notes-${item.id}`}
                    value={item.notes || ''}
                    onChange={(e) => handleNotesChange(category.id, item.id, e.target.value)}
                    placeholder="Ajouter des notes sur l'état du matériel..."
                    className="w-full"
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
      <div className="flex justify-end mt-8">
        <Button onClick={saveChanges} className="bg-green-600 hover:bg-green-700 text-lg px-6 py-3">
          <Save className="h-5 w-5 mr-2" /> Enregistrer la vérification
        </Button>
      </div>
    </div>
  );
}
