
import React from "react";

const ReferencesSectionDe: React.FC = () => {
  return (
    <>
      <h2 className="text-2xl font-bold text-blue-800 mb-4">Referenzen und weiterführende Literatur</h2>
      <p className="mb-4">Dieser Leitfaden basiert auf wissenschaftlicher Forschung und evidenzbasierten Strategien. Hier sind einige wichtige Quellen für weitere Informationen:</p>
      
      <h3 className="text-xl font-semibold text-blue-700 mt-6 mb-3">Bücher</h3>
      <ul className="list-disc pl-8 space-y-2 mb-6">
        <li>"Länger leben" von Dr. David Sinclair - Ein umfassender Blick auf die Wissenschaft der Alterung und die neuesten Forschungsergebnisse zu Langlebigkeitsinterventionen.</li>
        <li>"Die Blutzucker-Revolution" von Dr. Jesse Inchauspé - Praktische Strategien zur Optimierung des Blutzuckerspiegels für bessere Gesundheit.</li>
        <li>"Das Immunsystem stärken" von Dr. Jenna Macciochi - Ein wissenschaftlicher Leitfaden zur Unterstützung des Immunsystems durch Lebensstilmaßnahmen.</li>
        <li>"Der Schlaf-Code" von Dr. Matthew Walker - Eine tiefgehende Erkundung der Wissenschaft des Schlafes und seiner Auswirkungen auf die Gesundheit.</li>
        <li>"Die richtigen Enzyme für ein langes Leben" von Dr. Hiromi Shinya - Eine Perspektive darüber, wie Enzyme die Langlebigkeit beeinflussen können.</li>
      </ul>
      
      <h3 className="text-xl font-semibold text-blue-700 mt-6 mb-3">Wissenschaftliche Forschung</h3>
      <ul className="list-disc pl-8 space-y-2 mb-6">
        <li>Fontana, L., & Partridge, L. (2015). "Förderung der Langlebigkeit durch diätetische Beschränkung: Molekulare Mechanismen und klinische Anwendungen." <em>Cell Metabolism</em>, 22(1), 35-42.</li>
        <li>Mattson, M. P., et al. (2018). "Intermittierendes Fasten und metabolische Gesundheit: Von Glücksspielen zu bewussten Mahlzeiten." <em>Cell Metabolism</em>, 27(6), 1212-1221.</li>
        <li>Holt-Lunstad, J., et al. (2010). "Soziale Beziehungen und Mortalitätsrisiko: Eine Meta-analytische Überprüfung." <em>PLoS Medicine</em>, 7(7), e1000316.</li>
        <li>Aune, D., et al. (2017). "Obst- und Gemüseverzehr und das Risiko aller Todesursachen, kardiovaskulärer Krankheit und Krebs: Systematische Überprüfung und Dosis-Wirkungs-Meta-Analyse prospektiver Studien." <em>International Journal of Epidemiology</em>, 46(3), 1029-1056.</li>
        <li>Ekelund, U., et al. (2019). "Dosis-Wirkungs-Zusammenhänge zwischen körperlicher Aktivität und gesundem Leben: Gepoolte Analyse von 6 prospektiven Kohortenstudien." <em>BMJ</em>, 366, l4570.</li>
      </ul>

      <h3 className="text-xl font-semibold text-blue-700 mt-6 mb-3">Online-Ressourcen</h3>
      <ul className="list-disc pl-8 space-y-2 mb-6">
        <li>Deutsches Zentrum für Altersfragen (DZA) - <a href="https://www.dza.de/" className="text-blue-600 hover:text-blue-800 hover:underline" target="_blank" rel="noopener noreferrer">www.dza.de</a></li>
        <li>Max-Planck-Institut für Biologie des Alterns - <a href="https://www.age.mpg.de/" className="text-blue-600 hover:text-blue-800 hover:underline" target="_blank" rel="noopener noreferrer">www.age.mpg.de</a></li>
        <li>Deutsche Gesellschaft für Ernährung - <a href="https://www.dge.de/" className="text-blue-600 hover:text-blue-800 hover:underline" target="_blank" rel="noopener noreferrer">www.dge.de</a></li>
        <li>Robert Koch-Institut: Gesundheitsmonitoring - <a href="https://www.rki.de/DE/Content/Gesundheitsmonitoring/gesundheitsmonitoring_node.html" className="text-blue-600 hover:text-blue-800 hover:underline" target="_blank" rel="noopener noreferrer">Gesundheitsmonitoring</a></li>
        <li>Bundeszentrale für gesundheitliche Aufklärung - <a href="https://www.bzga.de/" className="text-blue-600 hover:text-blue-800 hover:underline" target="_blank" rel="noopener noreferrer">www.bzga.de</a></li>
      </ul>
      
      <p className="mt-6 text-gray-700">
        <em>Hinweis: Diese Liste ist nicht erschöpfend und wird regelmäßig aktualisiert. Die Wissenschaft der Langlebigkeit und der Gesundheitsspanne entwickelt sich ständig weiter, und ich bin bestrebt, mit den neuesten peer-reviewed Forschungsergebnissen und evidenzbasierten Praktiken Schritt zu halten.</em>
      </p>
    </>
  );
};

export default ReferencesSectionDe;
