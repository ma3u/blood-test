
import React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';
import { ExternalLink } from 'lucide-react';

interface ImpressumProps {
  trigger?: React.ReactNode;
}

const Impressum: React.FC<ImpressumProps> = ({ trigger }) => {
  const { t, language } = useLanguage();
  
  const getImpressumContent = () => {
    switch (language) {
      case 'de':
        return (
          <section>
            <p><strong>Name:</strong> Matthias Buchhorn-Roth</p>
            <p><strong>Adresse:</strong> Berlin, Deutschland</p>
            <p><strong>E-Mail:</strong> <a href="mailto:info@mabu.red" className="text-blue-500 hover:underline">info@mabu.red</a></p>
            <p><strong>Verantwortlich für den Inhalt:</strong> Matthias Buchhorn-Roth</p>
            <p><strong>LinkedIn-Profil:</strong> <a href="https://www.linkedin.com/in/mbuchhorn/" className="text-blue-500 hover:underline flex items-center" target="_blank" rel="noopener noreferrer">linkedin.com/in/mbuchhorn/ <ExternalLink className="h-3 w-3 ml-1" /></a></p>
            <p><strong>GitHub-Repository (Open Source):</strong> <a href="https://github.com/ma3u/blood-test" className="text-blue-500 hover:underline flex items-center" target="_blank" rel="noopener noreferrer">github.com/ma3u/blood-test <ExternalLink className="h-3 w-3 ml-1" /></a></p>
            <p><strong>Zuletzt aktualisiert:</strong> 2025-05-08</p>
          </section>
        );
      case 'fr':
        return (
          <section>
            <p><strong>Nom:</strong> Matthias Buchhorn-Roth</p>
            <p><strong>Adresse:</strong> Berlin, Allemagne</p>
            <p><strong>E-mail:</strong> <a href="mailto:info@mabu.red" className="text-blue-500 hover:underline">info@mabu.red</a></p>
            <p><strong>Responsable du contenu:</strong> Matthias Buchhorn-Roth</p>
            <p><strong>Profil LinkedIn:</strong> <a href="https://www.linkedin.com/in/mbuchhorn/" className="text-blue-500 hover:underline flex items-center" target="_blank" rel="noopener noreferrer">linkedin.com/in/mbuchhorn/ <ExternalLink className="h-3 w-3 ml-1" /></a></p>
            <p><strong>Dépôt GitHub (Open Source):</strong> <a href="https://github.com/ma3u/blood-test" className="text-blue-500 hover:underline flex items-center" target="_blank" rel="noopener noreferrer">github.com/ma3u/blood-test <ExternalLink className="h-3 w-3 ml-1" /></a></p>
            <p><strong>Dernière mise à jour:</strong> 2025-05-08</p>
          </section>
        );
      case 'es':
        return (
          <section>
            <p><strong>Nombre:</strong> Matthias Buchhorn-Roth</p>
            <p><strong>Dirección:</strong> Berlín, Alemania</p>
            <p><strong>Correo electrónico:</strong> <a href="mailto:info@mabu.red" className="text-blue-500 hover:underline">info@mabu.red</a></p>
            <p><strong>Responsable del contenido:</strong> Matthias Buchhorn-Roth</p>
            <p><strong>Perfil de LinkedIn:</strong> <a href="https://www.linkedin.com/in/mbuchhorn/" className="text-blue-500 hover:underline flex items-center" target="_blank" rel="noopener noreferrer">linkedin.com/in/mbuchhorn/ <ExternalLink className="h-3 w-3 ml-1" /></a></p>
            <p><strong>Repositorio GitHub (Código Abierto):</strong> <a href="https://github.com/ma3u/blood-test" className="text-blue-500 hover:underline flex items-center" target="_blank" rel="noopener noreferrer">github.com/ma3u/blood-test <ExternalLink className="h-3 w-3 ml-1" /></a></p>
            <p><strong>Última actualización:</strong> 2025-05-08</p>
          </section>
        );
      case 'ru':
        return (
          <section>
            <p><strong>Имя:</strong> Matthias Buchhorn-Roth</p>
            <p><strong>Адрес:</strong> Берлин, Германия</p>
            <p><strong>Электронная почта:</strong> <a href="mailto:info@mabu.red" className="text-blue-500 hover:underline">info@mabu.red</a></p>
            <p><strong>Ответственный за содержание:</strong> Matthias Buchhorn-Roth</p>
            <p><strong>Профиль LinkedIn:</strong> <a href="https://www.linkedin.com/in/mbuchhorn/" className="text-blue-500 hover:underline flex items-center" target="_blank" rel="noopener noreferrer">linkedin.com/in/mbuchhorn/ <ExternalLink className="h-3 w-3 ml-1" /></a></p>
            <p><strong>Репозиторий GitHub (открытый исходный код):</strong> <a href="https://github.com/ma3u/blood-test" className="text-blue-500 hover:underline flex items-center" target="_blank" rel="noopener noreferrer">github.com/ma3u/blood-test <ExternalLink className="h-3 w-3 ml-1" /></a></p>
            <p><strong>Последнее обновление:</strong> 2025-05-08</p>
          </section>
        );
      case 'zh':
        return (
          <section>
            <p><strong>姓名：</strong> Matthias Buchhorn-Roth</p>
            <p><strong>地址：</strong> 德国柏林</p>
            <p><strong>电子邮件：</strong> <a href="mailto:info@mabu.red" className="text-blue-500 hover:underline">info@mabu.red</a></p>
            <p><strong>内容负责人：</strong> Matthias Buchhorn-Roth</p>
            <p><strong>LinkedIn 个人资料：</strong> <a href="https://www.linkedin.com/in/mbuchhorn/" className="text-blue-500 hover:underline flex items-center" target="_blank" rel="noopener noreferrer">linkedin.com/in/mbuchhorn/ <ExternalLink className="h-3 w-3 ml-1" /></a></p>
            <p><strong>GitHub 仓库（开源）：</strong> <a href="https://github.com/ma3u/blood-test" className="text-blue-500 hover:underline flex items-center" target="_blank" rel="noopener noreferrer">github.com/ma3u/blood-test <ExternalLink className="h-3 w-3 ml-1" /></a></p>
            <p><strong>最后更新：</strong> 2025-05-08</p>
          </section>
        );
      case 'ja':
        return (
          <section>
            <p><strong>名前：</strong> Matthias Buchhorn-Roth</p>
            <p><strong>住所：</strong> ドイツ、ベルリン</p>
            <p><strong>メールアドレス：</strong> <a href="mailto:info@mabu.red" className="text-blue-500 hover:underline">info@mabu.red</a></p>
            <p><strong>コンテンツ責任者：</strong> Matthias Buchhorn-Roth</p>
            <p><strong>LinkedIn プロフィール：</strong> <a href="https://www.linkedin.com/in/mbuchhorn/" className="text-blue-500 hover:underline flex items-center" target="_blank" rel="noopener noreferrer">linkedin.com/in/mbuchhorn/ <ExternalLink className="h-3 w-3 ml-1" /></a></p>
            <p><strong>GitHub リポジトリ（オープンソース）：</strong> <a href="https://github.com/ma3u/blood-test" className="text-blue-500 hover:underline flex items-center" target="_blank" rel="noopener noreferrer">github.com/ma3u/blood-test <ExternalLink className="h-3 w-3 ml-1" /></a></p>
            <p><strong>最終更新日：</strong> 2025-05-08</p>
          </section>
        );
      default: // English
        return (
          <section>
            <p><strong>Name:</strong> Matthias Buchhorn-Roth</p>
            <p><strong>Address:</strong> Berlin, Germany</p>
            <p><strong>Email:</strong> <a href="mailto:info@mabu.red" className="text-blue-500 hover:underline">info@mabu.red</a></p>
            <p><strong>Responsible for Content:</strong> Matthias Buchhorn-Roth</p>
            <p><strong>LinkedIn Profile:</strong> <a href="https://www.linkedin.com/in/mbuchhorn/" className="text-blue-500 hover:underline flex items-center" target="_blank" rel="noopener noreferrer">linkedin.com/in/mbuchhorn/ <ExternalLink className="h-3 w-3 ml-1" /></a></p>
            <p><strong>GitHub Repository (Open Source):</strong> <a href="https://github.com/ma3u/blood-test" className="text-blue-500 hover:underline flex items-center" target="_blank" rel="noopener noreferrer">github.com/ma3u/blood-test <ExternalLink className="h-3 w-3 ml-1" /></a></p>
            <p><strong>Last Updated:</strong> 2025-05-08</p>
          </section>
        );
    }
  };
  
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger || <Button variant="ghost" size="sm">{t("impressum.menu")}</Button>}
      </DialogTrigger>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">
            {t("impressum.title")}
          </DialogTitle>
        </DialogHeader>
        <DialogDescription className="space-y-4 text-foreground">
          {getImpressumContent()}
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default Impressum;
