const leaderboardQueryHome = `
SELECT
    t.team_name AS name,
    SUM(CASE WHEN m.home_team_goals > m.away_team_goals THEN 3
             WHEN m.home_team_goals = m.away_team_goals THEN 1
             ELSE 0
        END) AS totalPoints,
    COUNT(*) AS totalGames,
    SUM(CASE WHEN m.home_team_goals > m.away_team_goals THEN 1 ELSE 0 END) +
    SUM(CASE WHEN m.away_team_goals > m.home_team_goals THEN 1 ELSE 0 END) AS totalVictories,
    SUM(CASE WHEN m.home_team_goals = m.away_team_goals THEN 1 ELSE 0 END) AS totalDraws,
    SUM(CASE WHEN m.home_team_goals < m.away_team_goals THEN 1 ELSE 0 END) +
    SUM(CASE WHEN m.away_team_goals < m.home_team_goals THEN 1 ELSE 0 END) AS totalLosses,
    SUM(CASE WHEN t.id = m.home_team_id THEN m.home_team_goals ELSE 0 END) AS goalsFavor,
    SUM(CASE WHEN t.id = m.away_team_id THEN m.away_team_goals ELSE 0 END) AS goalsOwn,
    SUM(CASE WHEN t.id = m.home_team_id THEN m.home_team_goals
             WHEN t.id = m.away_team_id THEN m.away_team_goals
             ELSE 0
        END) -
    SUM(CASE WHEN t.id = m.home_team_id THEN m.away_team_goals
             WHEN t.id = m.away_team_id THEN m.home_team_goals
             ELSE 0
        END) AS goalsBalance,
    FORMAT((SUM(CASE WHEN m.home_team_goals > m.away_team_goals THEN 3
                   WHEN m.home_team_goals = m.away_team_goals THEN 1
                   ELSE 0
              END) / (COUNT(*) * 3.0)) * 100.0, 2) AS efficiency
FROM teams t
LEFT JOIN matches m ON t.id = m.home_team_id OR t.id = m.away_team_id
WHERE m.in_progress = false
GROUP BY t.team_name
ORDER BY 
    totalPoints DESC,
    totalVictories DESC,
    goalsBalance DESC,
    goalsFavor DESC,
    name ASC;
`;


const leaderboardQueryAway = `
SELECT
    t.team_name AS name,
    SUM(CASE WHEN m.away_team_id = t.id AND m.away_team_goals > m.home_team_goals THEN 3
             WHEN m.away_team_id = t.id AND m.away_team_goals = m.home_team_goals THEN 1
             ELSE 0
        END) AS totalPoints,
    COUNT(*) AS totalGames,
    SUM(CASE WHEN m.away_team_id = t.id AND m.away_team_goals > m.home_team_goals THEN 1 ELSE 0 END) AS totalVictories,
    SUM(CASE WHEN m.away_team_id = t.id AND m.away_team_goals = m.home_team_goals THEN 1 ELSE 0 END) AS totalDraws,
    SUM(CASE WHEN m.away_team_id = t.id AND m.away_team_goals < m.home_team_goals THEN 1 ELSE 0 END) AS totalLosses,
    SUM(CASE WHEN m.away_team_id = t.id THEN m.away_team_goals ELSE 0 END) AS goalsFavor,
    SUM(CASE WHEN m.away_team_id = t.id THEN m.home_team_goals ELSE 0 END) AS goalsOwn,
    SUM(CASE WHEN m.away_team_id = t.id THEN m.away_team_goals ELSE 0 END) -
    SUM(CASE WHEN m.away_team_id = t.id THEN m.home_team_goals ELSE 0 END) AS goalsBalance,
    FORMAT((SUM(CASE WHEN m.away_team_id = t.id AND m.away_team_goals > m.home_team_goals THEN 3
                   WHEN m.away_team_id = t.id AND m.away_team_goals = m.home_team_goals THEN 1
                   ELSE 0
              END) / (COUNT(*) * 3.0)) * 100.0, 2) AS efficiency
FROM teams t
LEFT JOIN matches m ON t.id = m.away_team_id
WHERE m.in_progress = false
GROUP BY t.team_name
ORDER BY 
    totalPoints DESC,
    totalVictories DESC,
    goalsBalance DESC,
    goalsFavor DESC,
    name ASC;
`;

const leaderboardQueryOverall = `
SELECT
    t.team_name AS name,
    SUM(CASE 
        WHEN m.home_team_id = t.id AND m.home_team_goals > m.away_team_goals THEN 3
        WHEN m.home_team_id = t.id AND m.home_team_goals = m.away_team_goals THEN 1
        WHEN m.away_team_id = t.id AND m.away_team_goals > m.home_team_goals THEN 3
        WHEN m.away_team_id = t.id AND m.away_team_goals = m.home_team_goals THEN 1
        ELSE 0
    END) AS totalPoints,
    COUNT(*) AS totalGames,
    SUM(CASE WHEN (m.home_team_id = t.id AND m.home_team_goals > m.away_team_goals) OR 
                  (m.away_team_id = t.id AND m.away_team_goals > m.home_team_goals) THEN 1 ELSE 0 END) AS totalVictories,
    SUM(CASE WHEN (m.home_team_id = t.id AND m.home_team_goals = m.away_team_goals) OR 
                  (m.away_team_id = t.id AND m.away_team_goals = m.home_team_goals) THEN 1 ELSE 0 END) AS totalDraws,
    SUM(CASE WHEN (m.home_team_id = t.id AND m.home_team_goals < m.away_team_goals) OR 
                  (m.away_team_id = t.id AND m.away_team_goals < m.home_team_goals) THEN 1 ELSE 0 END) AS totalLosses,
    SUM(CASE WHEN m.home_team_id = t.id THEN m.home_team_goals ELSE 0 END) +
    SUM(CASE WHEN m.away_team_id = t.id THEN m.away_team_goals ELSE 0 END) AS goalsFavor,
    SUM(CASE WHEN m.home_team_id = t.id THEN m.away_team_goals ELSE 0 END) +
    SUM(CASE WHEN m.away_team_id = t.id THEN m.home_team_goals ELSE 0 END) AS goalsOwn,
    SUM(CASE WHEN m.home_team_id = t.id THEN m.home_team_goals -
                 m.away_team_goals
             ELSE m.away_team_goals - m.home_team_goals
        END) AS goalsBalance,
    FORMAT((SUM(CASE 
                  WHEN (m.home_team_id = t.id AND m.home_team_goals > m.away_team_goals) OR 
                       (m.away_team_id = t.id AND m.away_team_goals > m.home_team_goals) THEN 3
                  WHEN (m.home_team_id = t.id AND m.home_team_goals = m.away_team_goals) OR 
                       (m.away_team_id = t.id AND m.away_team_goals = m.home_team_goals) THEN 1
                  ELSE 0
              END) / (COUNT(*) * 3.0)) * 100.0, 2) AS efficiency
FROM teams t
LEFT JOIN matches m ON t.id = m.home_team_id OR t.id = m.away_team_id
WHERE m.in_progress = false
GROUP BY t.team_name
ORDER BY 
    totalPoints DESC,
    totalVictories DESC,
    goalsBalance DESC,
    goalsFavor DESC,
    name ASC;
`;


export { leaderboardQueryHome, leaderboardQueryAway, leaderboardQueryOverall };
