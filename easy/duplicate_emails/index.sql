/* Write your MySQL query statement below */
SELECT email
FROM Person
GROUP BY email
HAVING COUNT(email) > 1;

/*
runtime 334ms beats 93.43%

*/
