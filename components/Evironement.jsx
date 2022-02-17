import Navbar from "./Navbar";

export default function Environement() {
  return (
    <section id="environnement" className="snap-start h-screen px-8">
      <Navbar />
      <h1 className="text-4xl font-bold py-3 text-white text-center">
        Environement
      </h1>
      <div className="flex justify-center items-center gap-20 w-full">
        <div className="max-w-xs">
          <p className="text-white text-center">
            D'après le site ademe.fr je cite “88% des français changent leur
            téléphone portable alors qu’il fonctionne encore...”, pourquoi ? Car
            le renouvellement des smartphones est trop rapide. Pour prendre par
            exemple Xiaomi, le fabricant chinois qui a inondé le marché français
            de ces smartphones. La recette est simple Xiaomi sortait un
            smartphone presque toutes les deux semaines ou tous les mois. Cela
            pour pouvoir toucher tout le monde et susciter l’envie des
            utilisateurs. Mais quels impacts sur l'écologie ?
          </p>
        </div>
        <img src="/xiaomi.png" className="object-fill h-96 w-50" />
      </div>
      <div className="flex">
        <div className="basis-5/12 flex justify-end">
          <img
            src="/vie-smartphone-transparent.png"
            alt="photo"
            className="object-cover"
          />
        </div>
        <div className="basis-6/12 flex items-center max-w-2xl">
          <p className="text-white">
            Le cycle de vie d’un smartphone est non écologique dans à peu près
            toutes les étapes de vie. Je m'explique, il y a cinq étapes dans le
            cycle de vie d’un smartphone. Ces étapes sont: L’exploitation de
            matière première (généralement des minerais). La fabrication
            (assemblage, transformation des matières premières…) Son transport
            (camion, bateau, avion) Son utilisation Et ça fin de vie Toutes ces
            étapes sont néfastes pour la planète. Lors de son utilisation, un
            smartphone doit recharger sa batterie, cela consomme de l'énergie,
            sans parler de l'utilisation d’internet et de ces énormes
            datacenter. Lors de son transport les smartphones ne sont pas
            écologiques non plus car il se déplace via avion qui consomme du
            kérosène, par bateau et par camion qui consomme aussi du carburant
            (en général du gasoil). En fin de vie, cela dépend de comment
            l’utilisateur s’y prend. Car généralement les mobiles fonctionnent
            toujours et l’utilisateur peut soit le garder chez lui (ce qui n'a
            aucun intérêt), soit le jeter dans une poubelle (ce n’est pas
            conseillé non plus), soit le vendre ou le donner à une entreprise
            pour qu’elle puisse le recycler. Les deux dernière méthode sont les
            plus conseillées pour notre planète.
          </p>
        </div>
      </div>
      <div className="flex gap-20">
        <div className="basis-7/12 flex justify-end items-center">
          <p className="text-white text-left max-w-xl">
            Nous allons maintenant nous attardé sur les deux premiere etapes qui
            je cite “La fabrication d’un smartphone (de l’extraction des
            minerais à l’assemblage final) est responsable d’environ trois
            quarts de ces impacts”. La première étape est l’extraction minière
            et c’est malheureusement un sujet d’actualité en ce moment car les
            constructeurs sont en manque de minerais. C’est pour cela que le
            prix des matériels électroniques a subitement grimpé. Mais ne nous
            éloignons pas du sujet qui est l'écologie, l’extraction massive de
            ces minerais provoquent : Une destruction de notre écosystème
            Pollutions de l’air Pollutions des sols Pollutions de l’eau La
            fabrication des smartphones augmente les gaz à effet de serre. Et
            pose aussi un problème d'éthique. Car les gens qui les fabriquent
            sont souvent jeunes, sous payés et travaillent dans des conditions
            déplorables. Et c’est la même chose pour les minerais.
          </p>
        </div>
        <div className="basis-6/12">
          <img
            src="/minerai.jpg"
            alt="photo minerai"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
