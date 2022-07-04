import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
const articlesDir = path.join(process.cwd(), 'content/articles');
import md from 'markdown-it';



export function getMdArticlesByDate() {
    /*
        Cycle through dir and return an array of articles data objects sorted by date DESC
    */
    const dir = articlesDir;
    
    const filesList = fs.readdirSync(dir);
    const articlesData = filesList.map((fileName) => {
        const fileFullPath = path.join(dir, fileName);
        const fileContent = fs.readFileSync(fileFullPath, 'utf8');
        const parsedFileContent = matter(fileContent);

        return {
            id: fileName.slice(0,-3),
            content: parsedFileContent.content,
            data: { ...parsedFileContent.data }
        }
    });

    return articlesData.sort( (a, b) => {
        return new Date(b.data.date) - new Date(a.data.date);
    });
}



export function getMdArticlesIds() {
    /*
        Use filename without ".md" extension as id
    */
    const filesList = fs.readdirSync(articlesDir);
    return filesList.map((fileName) => {
        return {
            params: {
                id: fileName.slice(0,-3)
            }
        }
    });
}



export function getMdArticleData(id) {
    const fullPath = path.join(process.cwd(), 'content/articles', `${id}.md`);
    const content = fs.readFileSync(fullPath, 'utf8');
    const parsedContent = matter(content);
    const mdParser = new md();

    return {
        content: mdParser.render(parsedContent.content),
        data: { ...parsedContent.data }
    }
}