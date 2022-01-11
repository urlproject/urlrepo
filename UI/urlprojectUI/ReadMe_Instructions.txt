GitHubLink :- https://github.com/urlproject/urlrepo
---------------------------------------------------------------
UI Folder structure:- https://github.com/urlproject/urlrepo/tree/master/UI/urlprojectUI
Java Folder structure:- https://github.com/urlproject/urlrepo/tree/master/ShortUrlGeneration/ShortUrlGeneration
-----------------------------------------------------------------
Clone Url:-
git clone https://github.com/urlproject/urlrepo.git  (or download urlrepo-master.zip file from the github url)
-------------------------------------------------------------------------------
Steps to deploy :-
UI:-
1.Navigate to folder \UI\urlprojectUI and open bash command  prompt and type below commands
2.npm install
3.docker-compose up --build   (or ng serve --port=4201) .For UI , Port to be used is 4201

Java :-
1.Navigate to folder \ShortUrlGeneration\ShortUrlGeneration and open bash command prompt and below commands
2.mvn clean install (or take the spring-boot-docker.jar file from target folder)
3.java -jar target/spring-boot-docker.jar (For backend ,Port to be used is 9090)

------------------------------------------------------------------------------
Approach & scenarios covered :-

1.Once the long Url is entered,short URL is shown and added to the table below after "Show&Add" button is clicked.
2.Fields can be cleared by clicking of 'Reset' button.
3.The short Urls listed are all uniquely generated internally by method.
4.Short Urls are listed with unique URLIds in the table.
5.Any time, short Url in table can be clicked resulting in clickCount field to be increased.Click will take us to actual longUrl destination.
6.Blank Url cannot be entered.Validation message will be displayed.
7.The same Url cannot be entered twice.Existing urlId will be displyed if entered.
8.If URL successfully added,success message will be displayed beneath.
9.Error handling on UI and exception handling on backend have been taken care.

---------------------------------------------------------------------------------------------







 