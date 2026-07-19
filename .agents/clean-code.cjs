const fs = require('fs');
const path = require('path');

const cssToAppend = `
.admin-db-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1500;
  padding: 40px 20px;
}
.admin-db-card {
  background: var(--bg2);
  border: 1.5px solid var(--border2);
  border-radius: var(--radius-lg);
  width: 100%;
  max-width: 900px;
  height: 90vh;
  display: flex;
  flex-direction: column;
  box-shadow: var(--shadow-lg);
  overflow: hidden;
  animation: modalFadeIn 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.admin-db-header {
  padding: 24px 30px;
  border-bottom: 1.5px solid var(--border);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.admin-db-title-section h2 {
  font-size: 22px;
  font-weight: 800;
  color: var(--text);
}
.admin-db-subtitle {
  font-size: 13px;
  color: var(--text-muted);
}
.admin-db-close-btn {
  background: transparent;
  border: none;
  font-size: 32px;
  color: var(--text-muted);
  cursor: pointer;
  line-height: 1;
}
.admin-db-close-btn:hover {
  color: var(--text);
}
.admin-db-controls {
  padding: 20px 30px;
  display: flex;
  gap: 15px;
  border-bottom: 1px solid var(--border);
  align-items: center;
}
.admin-db-search-wrapper {
  position: relative;
  flex: 1;
}
.admin-db-search-wrapper svg {
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-muted);
}
.admin-db-search {
  width: 100%;
  background: var(--input-bg);
  border: 1.5px solid var(--border2);
  border-radius: var(--radius);
  padding: 12px 16px 12px 42px;
  color: var(--text);
  font-family: var(--font);
  font-size: 15px;
  outline: none;
  transition: border-color var(--transition);
}
.admin-db-search:focus {
  border-color: var(--primary);
}
.admin-db-add-btn {
  flex-shrink: 0;
  padding: 12px 24px;
  font-size: 15px;
  font-weight: 600;
}
.admin-db-list-wrapper {
  flex: 1;
  overflow-y: auto;
  padding: 20px 30px;
}
.admin-db-empty {
  text-align: center;
  padding: 40px;
  color: var(--text-muted);
}
.admin-db-table {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.admin-db-thead {
  display: block;
}
.admin-db-tbody {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.admin-db-tr {
  display: flex;
  width: 100%;
  align-items: center;
  padding: 12px 15px;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  transition: transform 0.2s ease, border-color 0.2s ease;
}
.admin-db-tbody .admin-db-tr:hover {
  border-color: var(--border2);
  transform: translateY(-2px);
}
.admin-db-th, .admin-db-td {
  padding: 6px;
  display: flex;
  align-items: center;
}
.admin-db-th {
  font-size: 13px;
  font-weight: 700;
  color: var(--text-muted);
  text-transform: uppercase;
}
.th-img, .td-img { width: 10%; justify-content: center; }
.th-name, .td-name { width: 30%; }
.th-cat, .td-cat { width: 20%; }
.th-price, .td-price { width: 15%; }
.th-veg, .td-veg { width: 12%; }
.th-actions, .td-actions { width: 13%; justify-content: flex-end; gap: 8px; }

.td-img img {
  width: 44px;
  height: 44px;
  border-radius: 8px;
  object-fit: cover;
}
.p-name {
  font-weight: 600;
  color: var(--text);
  font-size: 15px;
}
.cat-tag {
  display: inline-block;
  padding: 3px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  text-transform: capitalize;
  background: var(--bg3);
  color: var(--text-muted);
}
.p-price {
  font-weight: 700;
  color: var(--text);
}
.veg-badge {
  font-size: 11px;
  font-weight: 700;
  padding: 3px 8px;
  border-radius: 4px;
  text-transform: uppercase;
}
.veg-badge.is-veg {
  background: rgba(34, 197, 94, 0.15);
  color: var(--green);
}
.veg-badge.non-veg {
  background: rgba(239, 68, 68, 0.15);
  color: var(--red);
}
.btn-db-action {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition);
}
.btn-db-action.edit {
  background: rgba(255, 107, 43, 0.1);
  color: var(--primary);
}
.btn-db-action.edit:hover {
  background: var(--primary);
  color: #fff;
}
.btn-db-action.delete {
  background: rgba(239, 68, 68, 0.1);
  color: var(--red);
}
.btn-db-action.delete:hover {
  background: var(--red);
  color: #fff;
}
.admin-db-td .mobile-label {
  display: none;
}

@media (max-width: 768px) {
  .admin-db-card {
    height: 100vh;
    border-radius: 0;
    max-width: 100%;
  }
  .admin-db-header {
    padding: 16px 20px;
  }
  .admin-db-controls {
    padding: 16px 20px;
    flex-direction: column;
    align-items: stretch;
  }
  .admin-db-list-wrapper {
    padding: 16px 20px;
  }
  .admin-db-thead {
    display: none;
  }
  .admin-db-tbody {
    gap: 15px;
  }
  .admin-db-tr {
    flex-direction: column;
    align-items: stretch;
    padding: 15px;
    gap: 0;
  }
  .admin-db-td {
    width: 100% !important;
    justify-content: space-between;
    padding: 10px 0;
    border-bottom: 1px solid var(--border);
  }
  .admin-db-td.td-img {
    justify-content: center;
    border-bottom: none;
    padding: 0 0 10px 0;
  }
  .admin-db-td.td-actions {
    justify-content: flex-end;
    border-bottom: none;
    padding: 10px 0 0 0;
    gap: 15px;
  }
  .admin-db-td .mobile-label {
    display: inline-block;
    font-weight: 700;
    color: var(--text-muted);
    font-size: 13px;
    text-transform: uppercase;
  }
  .td-img img {
    width: 60px;
    height: 60px;
  }
  .btn-db-action {
    flex: 1;
    height: 38px;
  }
  .user-dropdown-menu {
    right: auto;
    left: 50%;
    transform: translateX(-50%);
  }
}
`;

const srcPath = 'c:\\Users\\Rashtra Bhushan\\Downloads\\campus-bites-react\\campus-bites\\src';
const styleCssPath = path.join(srcPath, 'style.css');

if (fs.existsSync(styleCssPath)) {
  fs.appendFileSync(styleCssPath, cssToAppend);
  console.log('Appended login/admin CSS styles to style.css');
} else {
  console.error('style.css not found at', styleCssPath);
}

function removeCommentsFromJS(content) {
  return content.replace(/("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`(?:\\.|[^`\\])*`|(?:\/\*(?:[\s\S]*?)\*\/)|(?:\/\/(?:.*)))/g, (match) => {
    if (match.startsWith('/') && !match.startsWith('// #') && !match.startsWith('//http') && !match.startsWith('//https')) {
      return '';
    }
    return match;
  });
}

function removeCommentsFromCSS(content) {
  return content.replace(/\/\*[\s\S]*?\*\//g, '');
}

function removeJSXBracesComments(content) {
  return content.replace(/\{\s*\/\*[\s\S]*?\*\/\s*\}/g, '');
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else {
      const ext = path.extname(file);
      if (ext === '.js' || ext === '.jsx') {
        let content = fs.readFileSync(fullPath, 'utf8');
        content = removeCommentsFromJS(content);
        content = removeJSXBracesComments(content);
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Removed comments from: ${file}`);
      } else if (ext === '.css') {
        let content = fs.readFileSync(fullPath, 'utf8');
        content = removeCommentsFromCSS(content);
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Removed comments from: ${file}`);
      }
    }
  }
}

processDirectory(srcPath);
console.log('Finished removing all comments from the codebase.');
