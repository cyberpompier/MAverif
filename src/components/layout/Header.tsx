import { Link } from 'react-router-dom';
import { Car, ListChecks, Users, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center space-x-2">
          <ListChecks className="h-6 w-6 text-red-600" />
          <span className="font-bold text-lg text-red-700 hidden sm:inline">Pompier Equipement</span>
        </Link>
        <nav className="flex items-center space-x-4">
          <Button asChild variant="ghost" className="text-red-600 hover:text-red-700">
            <Link to="/">
              <Car className="h-5 w-5 mr-2" />
              Véhicules
            </Link>
          </Button>
          <Button asChild variant="ghost" className="text-red-600 hover:text-red-700">
            <Link to="/personnel">
              <Users className="h-5 w-5 mr-2" />
              Personnel
            </Link>
          </Button>
          <Button asChild variant="ghost" className="text-red-600 hover:text-red-700">
            <Link to="/equipment-management">
              <Wrench className="h-5 w-5 mr-2" />
              Matériel
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
