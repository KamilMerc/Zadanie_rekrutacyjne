# Zadanie_rekrutacyjne

# Działanie aplikacji
Aplikacja umożliwia:
1. Wygenerowanie artykułu w formacie HTML na podstawie pliku tekstowego z artykułem oraz ściśle określonych wytycznych, przy pomocy modelu OpenAI, a następnie zapisanie go do pliku 'artykul.html'. Odpowiada za to plik 'index.js'. 
2. Podgląd wygenerowanego artykułu, odpowiada za to plik 'podglad.html'.

Dodatkowo aplikacja zawiera pusty szablon umożliwiający ręczne wklejenie treści artykułu w sekcję <body> oraz jego podgląd. Odpowiada za to plik 'szablon.html'.


# Instrukcja uruchomienia
1. Sklonuj repozytorium:
git clone https://github.com/KamilMerc/Zadanie_rekrutacyjne.git 
2. Przejdź do folderu projektu:
cd Zadanie_rekrutacyjne
3. Zainstaluj wszystkie wymagane zależności:
npm i 
4. W folderze głównym projektu stwórz plik '.env'. Następnie wejdź do pliku '.env_sample', skopiuj nazwę zmiennej środowiskowej, wklej ją do pliku '.env' i przypisz do niej Twój klucz API OpenAI.
5. Aby wygenerować plik artykul.html uruchom index.js:
node index.js.
Jeżeli w folderze projektu znajduje się już plik 'artykul.html', program nadpisze go. W przypadku gdy tego pliku nie będzie, program go stworzy.
6. Aby uruchomić pełny podgląd artykułu, kliknij prawym przyciskiem myszy na plik 'podglad.html', a następnie wybierz opcję 'Open with Live Server' (Visual Studio Code). Jeżeli nie masz takiej opcji, zainstaluj rozszerzenie 'Live Server'.
7. Jeżeli chcesz skorzystać z pustego szablonu, w pliku 'szablon.html' wklej między znacznik <body> a </body> kod artykułu z pliku 'artykul.html'. Aby uruchomić podgląd artykułu, postępuj analogicznie jak w punkcie 6. 


=========================================================


# Recruitment_task

# Application operation
The application enables:
1. Generating an article in HTML format based on a text file with the article and strictly defined guidelines, using the OpenAI model, and then saving it to the file 'artykul.html'. The 'index.js' file is responsible for this. 
2. Preview of the generated article, the file 'podglad.html' is responsible for this.

Additionally, the application contains an empty template that allows you to manually paste the content of the article into the <body> section and preview it. The 'szablon.html' file is responsible for this.


# Startup instructions
1. Clone the repository:
git clone https://github.com/KamilMerc/Zadanie_rekrutacyjne.git 
2. Go to the project folder:
cd Zadanie_rekrutacyjne
3. Install all required dependencies:
npm i 
4. In the main project folder, create an '.env' file. Then go to the '.env_sample' file, copy the name of the environment variable, paste it into the '.env' file and assign your OpenAI API key to it.
5. To generate the artykul.html file, run index.js:
node index.js.
If there is already an 'artykul.html' file in the project folder, the program will overwrite it. If this file does not exist, the program will create it.
6. To run a full preview of the article, right-click on the 'podglad.html' file and then select 'Open with Live Server' (Visual Studio Code). If you don't have this option, install the 'Live Server' extension.
7. If you want to use an empty template, in the 'szablon.html' file, paste the article code from the 'artykul.html' file between the <body> and </body> tags. To start the article preview, proceed in the same way as in point 6.