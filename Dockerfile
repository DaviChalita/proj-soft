FROM openjdk:8
ADD build/libs/jpa-example.jar jpa-example.jar
EXPOSE 8000
ENTRYPOINT ["java", "-jar", "jpa-example.jar"]