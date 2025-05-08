
import React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';

interface ImpressumProps {
  trigger?: React.ReactNode;
}

const Impressum: React.FC<ImpressumProps> = ({ trigger }) => {
  const { t } = useLanguage();
  
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger || <Button variant="ghost" size="sm">{t("impressum.menu")}</Button>}
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-blue-600 mb-4">
            {t("impressum.title")}
          </DialogTitle>
        </DialogHeader>
        <DialogDescription className="space-y-6 text-foreground">
          <div className="space-y-4">
            <section className="border-b pb-4">
              <h3 className="font-semibold text-lg mb-2">Información de Contacto</h3>
              <p><strong>Nombre de la Empresa:</strong> [Nombre de su empresa]</p>
              <p><strong>Representante Legal:</strong> [Nombre del representante legal]</p>
              <p><strong>Dirección:</strong> [Dirección completa]</p>
              <p><strong>Correo Electrónico:</strong> [correo electrónico]</p>
              <p><strong>Teléfono:</strong> [número de teléfono]</p>
            </section>
            
            <section className="border-b pb-4">
              <h3 className="font-semibold text-lg mb-2">Registro Mercantil</h3>
              <p><strong>Tribunal de Registro:</strong> [Tribunal de registro]</p>
              <p><strong>Número de Registro:</strong> [Número de registro]</p>
              <p><strong>Número de Identificación Fiscal:</strong> [NIF/CIF]</p>
            </section>
            
            <section className="border-b pb-4">
              <h3 className="font-semibold text-lg mb-2">Autoridad Supervisora</h3>
              <p><strong>Nombre de la Autoridad:</strong> [Si es aplicable]</p>
              <p><strong>Dirección de la Autoridad:</strong> [Dirección completa]</p>
            </section>
            
            <section className="border-b pb-4">
              <h3 className="font-semibold text-lg mb-2">Resolución de Disputas</h3>
              <p>La Comisión Europea ofrece una plataforma para la resolución alternativa de conflictos en línea (ODR): <a href="https://ec.europa.eu/consumers/odr/" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr/</a></p>
            </section>
            
            <section className="border-b pb-4">
              <h3 className="font-semibold text-lg mb-2">Responsabilidad por el Contenido</h3>
              <p>Como proveedor de servicios, somos responsables del contenido propio de acuerdo con las leyes generales. Sin embargo, no estamos obligados a monitorear la información transmitida o almacenada por terceros, ni a investigar circunstancias que indiquen actividad ilegal.</p>
            </section>
            
            <section className="border-b pb-4">
              <h3 className="font-semibold text-lg mb-2">Protección de Datos</h3>
              <p>Para obtener información sobre cómo recopilamos, procesamos y utilizamos datos personales, consulte nuestra Política de Privacidad.</p>
            </section>
            
            <section>
              <p className="text-sm text-gray-500 mt-4">Última actualización: [Fecha]</p>
            </section>
          </div>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default Impressum;
