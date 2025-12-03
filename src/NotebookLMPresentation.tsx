import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, BookOpen, MessageSquare, FileText, Headphones, ClipboardList, Lightbulb, Home } from 'lucide-react';

const NotebookLMPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "NotebookLM per la Didattica",
      icon: <BookOpen className="w-16 h-16 text-blue-600" />,
      content: (
        <div className="space-y-6">
          <p className="text-xl text-gray-700">
            Benvenuti! Questa presentazione vi guiderà nell'uso di NotebookLM, 
            uno strumento AI di Google che può trasformare il vostro modo di insegnare.
          </p>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-3 text-blue-900">Cos'è NotebookLM?</h3>
            <p className="text-gray-700">
              È un assistente AI che analizza i vostri materiali didattici e vi aiuta a:
            </p>
            <ul className="mt-3 space-y-2 text-gray-700">
              <li>✓ Creare riassunti e guide di studio</li>
              <li>✓ Generare domande e quiz</li>
              <li>✓ Rispondere a domande sui contenuti</li>
              <li>✓ Produrre podcast educativi</li>
            </ul>
          </div>
          <p className="text-lg text-center text-blue-600 font-semibold">
            → Usate le frecce per navigare tra le funzioni principali
          </p>
        </div>
      )
    },
    {
      title: "1. Caricamento e Organizzazione",
      icon: <FileText className="w-12 h-12 text-green-600" />,
      content: (
        <div className="space-y-4">
          <div className="bg-green-50 p-5 rounded-lg">
            <h3 className="font-bold text-lg mb-2 text-green-900">Come funziona</h3>
            <p className="text-gray-700">
              NotebookLM vi permette di caricare fino a 50 fonti diverse per ogni notebook.
            </p>
          </div>
          
          <div className="bg-white border-2 border-green-200 p-5 rounded-lg">
            <h4 className="font-bold mb-3 text-green-800">Tipi di file supportati:</h4>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gray-50 p-3 rounded">📄 PDF</div>
              <div className="bg-gray-50 p-3 rounded">📝 Google Docs</div>
              <div className="bg-gray-50 p-3 rounded">📊 Google Slides</div>
              <div className="bg-gray-50 p-3 rounded">🔗 Link web</div>
              <div className="bg-gray-50 p-3 rounded">📋 Testo copiato</div>
              <div className="bg-gray-50 p-3 rounded">🎥 Video YouTube</div>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
            <p className="font-bold text-yellow-900 mb-2">💡 Esempio pratico:</p>
            <p className="text-gray-700">
              Caricate il programma del corso, le slide delle lezioni, articoli di riferimento 
              e materiali integrativi. NotebookLM li analizzerà tutti insieme per aiutarvi 
              a preparare le lezioni o rispondere alle domande degli studenti.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "2. Chat con i Documenti",
      icon: <MessageSquare className="w-12 h-12 text-purple-600" />,
      content: (
        <div className="space-y-4">
          <div className="bg-purple-50 p-5 rounded-lg">
            <h3 className="font-bold text-lg mb-2 text-purple-900">Dialogate con i vostri materiali</h3>
            <p className="text-gray-700">
              Fate domande specifiche e NotebookLM trova le risposte nei documenti caricati, 
              citando sempre le fonti.
            </p>
          </div>

          <div className="bg-white border-2 border-purple-200 p-5 rounded-lg">
            <h4 className="font-bold mb-3 text-purple-800">Esempi di domande utili:</h4>
            <div className="space-y-3">
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="font-semibold text-purple-700">Per preparare lezioni:</p>
                <p className="text-sm text-gray-600 italic mt-1">
                  "Quali sono i concetti chiave del capitolo 3?"
                </p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="font-semibold text-purple-700">Per rispondere agli studenti:</p>
                <p className="text-sm text-gray-600 italic mt-1">
                  "Come viene spiegata la fotosintesi in questi materiali?"
                </p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="font-semibold text-purple-700">Per collegamenti:</p>
                <p className="text-sm text-gray-600 italic mt-1">
                  "Quali collegamenti ci sono tra la Rivoluzione Francese e quella Americana?"
                </p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
            <p className="font-bold text-yellow-900 mb-2">💡 Consiglio:</p>
            <p className="text-gray-700">
              Le risposte includono sempre citazioni. Potete cliccarci sopra per vedere 
              esattamente da quale documento proviene l'informazione.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "3. Riassunti Automatici",
      icon: <FileText className="w-12 h-12 text-blue-600" />,
      content: (
        <div className="space-y-4">
          <div className="bg-blue-50 p-5 rounded-lg">
            <h3 className="font-bold text-lg mb-2 text-blue-900">Sintesi istantanee</h3>
            <p className="text-gray-700">
              NotebookLM genera automaticamente riassunti dei vostri documenti, 
              perfetti da condividere con gli studenti.
            </p>
          </div>

          <div className="bg-white border-2 border-blue-200 p-5 rounded-lg">
            <h4 className="font-bold mb-3 text-blue-800">Cosa potete creare:</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📝</span>
                <div>
                  <p className="font-semibold">Riassunto generale</p>
                  <p className="text-sm text-gray-600">Panoramica completa di tutti i documenti</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">📚</span>
                <div>
                  <p className="font-semibold">Guida di studio</p>
                  <p className="text-sm text-gray-600">Organizzata per argomenti e concetti chiave</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎯</span>
                <div>
                  <p className="font-semibold">Punti salienti</p>
                  <p className="text-sm text-gray-600">I concetti più importanti evidenziati</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
            <p className="font-bold text-yellow-900 mb-2">💡 Esempio pratico:</p>
            <p className="text-gray-700">
              Dopo aver caricato 5 articoli sulla Seconda Guerra Mondiale, chiedete: 
              "Crea una guida di studio con i punti chiave per i miei studenti". 
              In pochi secondi avrete un documento pronto da condividere.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "4. Audio Overview (Podcast)",
      icon: <Headphones className="w-12 h-12 text-red-600" />,
      content: (
        <div className="space-y-4">
          <div className="bg-red-50 p-5 rounded-lg">
            <h3 className="font-bold text-lg mb-2 text-red-900">Trasformate i contenuti in podcast</h3>
            <p className="text-gray-700">
              Una funzione innovativa: NotebookLM crea un dialogo tra due "host" AI 
              che discutono i vostri materiali in modo naturale e coinvolgente.
            </p>
          </div>

          <div className="bg-white border-2 border-red-200 p-5 rounded-lg">
            <h4 className="font-bold mb-3 text-red-800">Vantaggi per la didattica:</h4>
            <div className="space-y-3">
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="font-semibold text-red-700">🎧 Apprendimento alternativo</p>
                <p className="text-sm text-gray-600">
                  Ideale per studenti con stili di apprendimento uditivo
                </p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="font-semibold text-red-700">🚗 Fruibilità mobile</p>
                <p className="text-sm text-gray-600">
                  Gli studenti possono ascoltare mentre si spostano
                </p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="font-semibold text-red-700">🔄 Ripasso efficace</p>
                <p className="text-sm text-gray-600">
                  Perfetto per ripassare prima di verifiche ed esami
                </p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
            <p className="font-bold text-yellow-900 mb-2">💡 Come usarlo:</p>
            <p className="text-gray-700">
              Cliccate su "Generate" nella sezione Audio Overview. In 3-5 minuti avrete 
              un podcast di circa 10 minuti che spiega i concetti principali in modo conversazionale.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "5. Generazione Quiz e Domande",
      icon: <ClipboardList className="w-12 h-12 text-orange-600" />,
      content: (
        <div className="space-y-4">
          <div className="bg-orange-50 p-5 rounded-lg">
            <h3 className="font-bold text-lg mb-2 text-orange-900">Verifiche in pochi secondi</h3>
            <p className="text-gray-700">
              NotebookLM può generare domande di verifica basate sui vostri materiali, 
              risparmiandovi ore di lavoro.
            </p>
          </div>

          <div className="bg-white border-2 border-orange-200 p-5 rounded-lg">
            <h4 className="font-bold mb-3 text-orange-800">Tipi di domande:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="font-semibold text-orange-700">✓ Scelta multipla</p>
                <p className="text-xs text-gray-600">Con distrattori plausibili</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="font-semibold text-orange-700">✓ Vero/Falso</p>
                <p className="text-xs text-gray-600">Con spiegazioni</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="font-semibold text-orange-700">✓ Aperte</p>
                <p className="text-xs text-gray-600">Per verifiche scritte</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="font-semibold text-orange-700">✓ Di comprensione</p>
                <p className="text-xs text-gray-600">Su concetti chiave</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
            <p className="font-bold text-yellow-900 mb-2">💡 Esempio pratico:</p>
            <p className="text-gray-700 mb-2">
              Chiedete: "Genera 10 domande a scelta multipla di difficoltà media 
              sul Rinascimento italiano"
            </p>
            <p className="text-sm text-gray-600 italic">
              Potete personalizzare: livello di difficoltà, numero di domande, 
              argomenti specifici, formato desiderato.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Casi d'Uso Pratici",
      icon: <Lightbulb className="w-12 h-12 text-yellow-600" />,
      content: (
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-5 rounded-lg">
            <h3 className="font-bold text-lg mb-2 text-gray-800">Come integrare NotebookLM nella didattica quotidiana</h3>
          </div>

          <div className="space-y-3">
            <div className="bg-white border-l-4 border-blue-500 p-4 rounded-r-lg shadow-sm">
              <p className="font-bold text-blue-700 mb-2">📖 Preparazione Lezioni</p>
              <p className="text-sm text-gray-700">
                Caricate il libro di testo e materiali extra. Chiedete riassunti, 
                collegamenti interdisciplinari e idee per attività pratiche.
              </p>
            </div>

            <div className="bg-white border-l-4 border-green-500 p-4 rounded-r-lg shadow-sm">
              <p className="font-bold text-green-700 mb-2">👥 Differenziazione</p>
              <p className="text-sm text-gray-700">
                Create diverse versioni dei materiali: riassunti semplificati per chi ha difficoltà, 
                approfondimenti per studenti avanzati, podcast per chi apprende meglio ascoltando.
              </p>
            </div>

            <div className="bg-white border-l-4 border-purple-500 p-4 rounded-r-lg shadow-sm">
              <p className="font-bold text-purple-700 mb-2">✍️ Correzione Compiti</p>
              <p className="text-sm text-gray-700">
                Caricate il testo di riferimento e i compiti degli studenti. 
                Chiedete: "Questo elaborato copre tutti i punti richiesti?"
              </p>
            </div>

            <div className="bg-white border-l-4 border-red-500 p-4 rounded-r-lg shadow-sm">
              <p className="font-bold text-red-700 mb-2">🔄 Ripasso Pre-Verifica</p>
              <p className="text-sm text-gray-700">
                Generate guide di studio e podcast che gli studenti possono usare 
                per ripassare autonomamente prima delle verifiche.
              </p>
            </div>

            <div className="bg-white border-l-4 border-orange-500 p-4 rounded-r-lg shadow-sm">
              <p className="font-bold text-orange-700 mb-2">🎓 Progetti di Ricerca</p>
              <p className="text-sm text-gray-700">
                Aiutate gli studenti a organizzare le loro ricerche caricando articoli 
                e fonti, poi guidateli nell'analisi con domande mirate.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Consigli e Best Practices",
      icon: <Lightbulb className="w-12 h-12 text-green-600" />,
      content: (
        <div className="space-y-4">
          <div className="bg-green-50 p-5 rounded-lg">
            <h3 className="font-bold text-lg mb-2 text-green-900">Per ottenere i migliori risultati</h3>
          </div>

          <div className="space-y-3">
            <div className="bg-white border-2 border-green-200 p-4 rounded-lg">
              <p className="font-bold text-green-700 mb-2">✅ Organizzate per argomento</p>
              <p className="text-sm text-gray-700">
                Create notebook separati per ogni unità didattica o argomento. 
                Questo rende le ricerche più precise ed efficaci.
              </p>
            </div>

            <div className="bg-white border-2 border-green-200 p-4 rounded-lg">
              <p className="font-bold text-green-700 mb-2">✅ Siate specifici nelle domande</p>
              <p className="text-sm text-gray-700">
                Invece di "Parlami della guerra", chiedete: "Quali furono le cause principali 
                della Prima Guerra Mondiale secondo questi documenti?"
              </p>
            </div>

            <div className="bg-white border-2 border-green-200 p-4 rounded-lg">
              <p className="font-bold text-green-700 mb-2">✅ Verificate sempre i contenuti</p>
              <p className="text-sm text-gray-700">
                L'AI è potente ma non infallibile. Controllate le citazioni e i contenuti 
                generati prima di condividerli con gli studenti.
              </p>
            </div>

            <div className="bg-white border-2 border-green-200 p-4 rounded-lg">
              <p className="font-bold text-green-700 mb-2">✅ Usate fonti di qualità</p>
              <p className="text-sm text-gray-700">
                Caricate materiali affidabili e verificati. La qualità dell'output 
                dipende dalla qualità delle fonti.
              </p>
            </div>

            <div className="bg-white border-2 border-green-200 p-4 rounded-lg">
              <p className="font-bold text-green-700 mb-2">✅ Sperimentate!</p>
              <p className="text-sm text-gray-700">
                Provate diverse formulazioni delle domande, testate vari formati di output. 
                Scoprirete nuovi modi creativi di usare lo strumento.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400 mt-4">
            <p className="font-bold text-blue-900 mb-2">🚀 Pronti a iniziare?</p>
            <p className="text-gray-700">
              Visitate <span className="font-mono text-sm bg-white px-2 py-1 rounded">notebooklm.google.com</span> e 
              iniziate a sperimentare con i vostri materiali didattici!
            </p>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-t-2xl shadow-lg p-6 border-b-4 border-blue-500">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {slides[currentSlide].icon}
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                  {slides[currentSlide].title}
                </h1>
                <p className="text-sm text-gray-500 mt-1">
                  Slide {currentSlide + 1} di {slides.length}
                </p>
              </div>
            </div>
            <button
              onClick={() => goToSlide(0)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              title="Torna all'inizio"
            >
              <Home className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white shadow-lg p-8 min-h-[500px]">
          {slides[currentSlide].content}
        </div>

        {/* Navigation */}
        <div className="bg-white rounded-b-2xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                currentSlide === 0
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-blue-500 text-white hover:bg-blue-600 shadow-md hover:shadow-lg'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
              Precedente
            </button>

            <button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                currentSlide === slides.length - 1
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-blue-500 text-white hover:bg-blue-600 shadow-md hover:shadow-lg'
              }`}
            >
              Successiva
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Progress dots */}
          <div className="flex justify-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all rounded-full ${
                  index === currentSlide
                    ? 'w-8 h-3 bg-blue-500'
                    : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                }`}
                title={`Vai alla slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotebookLMPresentation;