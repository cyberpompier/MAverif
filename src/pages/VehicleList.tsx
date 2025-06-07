import { Link } from 'react-router-dom';
import { Car, CalendarDays, CheckCircle2, XCircle, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { mockVehicles } from '@/data/mockData';
import { Vehicle } from '@/types';

export function VehicleList() {
  const getVehicleStatus = (vehicle: Vehicle) => {
    let missingCount = 0;
    let damagedCount = 0;

    vehicle.equipmentCategories.forEach(category => {
      category.items.forEach(item => {
        if (item.status === 'missing') {
          missingCount++;
        } else if (item.status === 'damaged') {
          damagedCount++;
        }
      });
    });

    if (missingCount > 0 || damagedCount > 0) {
      return (
        <Badge variant="destructive" className="flex items-center gap-1">
          <XCircle className="h-3 w-3" />
          Anomalies ({missingCount + damagedCount})
        </Badge>
      );
    }
    return (
      <Badge variant="default" className="flex items-center gap-1 bg-green-600 hover:bg-green-700">
        <CheckCircle2 className="h-3 w-3" />
        OK
      </Badge>
    );
  };

  return (
    <div className="container mx-auto p-4 md:p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-red-700">Liste des Véhicules</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockVehicles.map((vehicle) => (
          <Link to={`/vehicle/${vehicle.id}`} key={vehicle.id}>
            <Card className="hover:shadow-lg transition-shadow duration-200 h-full flex flex-col">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-xl font-semibold text-red-600 flex items-center gap-2">
                  <img
                    src={vehicle.photoUrl}
                    alt={vehicle.name}
                    className="h-16 w-16 rounded-full object-cover border-2 border-red-500 shadow-sm"
                  />
                  {vehicle.name}
                </CardTitle>
                {getVehicleStatus(vehicle)}
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground mb-2">{vehicle.type}</p>
                <p className="text-sm text-muted-foreground mb-4">Immatriculation: {vehicle.registration}</p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <CalendarDays className="h-4 w-4 mr-2" />
                  Dernière vérification: {vehicle.lastCheck}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
