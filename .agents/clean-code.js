const fs = require('fs');
const path = require('path');

const cssToAppend = `
.auth-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 20px;
}
.auth-modal-card {
  background: var(--bg2);
  border: 1.5px solid var(--border2);
  border-radius: var(--radius-lg);
  padding: 30px;
  width: 100%;
  max-width: 420px;
  box-shadow: var(--shadow-lg);
  position: relative;
  animation: modalFadeIn 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
@keyframes modalFadeIn {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}
.auth-modal-close {
  position: absolute;
  top: 15px;
  right: 15px;
  background: transparent;
  border: none;
  font-size: 28px;
  color: var(--text-muted);
  cursor: pointer;
  line-height: 1;
}
.auth-modal-close:hover {
  color: var(--text);
}
.auth-modal-tabs {
  display: flex;
  border-bottom: 2px solid var(--border);
  margin-bottom: 25px;
}
.auth-tab-btn {
  flex: 1;
  background: transparent;
  border: none;
  padding: 12px;
  color: var(--text-muted);
  font-family: var(--font);
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  margin-bottom: -2px;
}
.auth-tab-btn.active {
  color: var(--primary);
  border-bottom-color: var(--primary);
}
.auth-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.auth-form h3 {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 5px;
}
.auth-form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.auth-form-group label {
  font-size: 14px;
  font-weight: 500;
  color: var(--text-muted);
}
.auth-form-group input,
.auth-form-group select,
.auth-form-group textarea {
  background: var(--input-bg);
  border: 1.5px solid var(--border2);
  border-radius: var(--radius);
  padding: 12px 16px;
  color: var(--text);
  font-family: var(--font);
  font-size: 15px;
  outline: none;
  transition: border-color var(--transition);
}
.auth-form-group input:focus,
.auth-form-group select:focus,
.auth-form-group textarea:focus {
  border-color: var(--primary);
}
.auth-error-msg {
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid var(--red);
  color: var(--red);
  border-radius: var(--radius-sm);
  padding: 10px 14px;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 15px;
}
.auth-helper-text {
  font-size: 12px;
  color: var(--text-muted);
  text-align: center;
  margin-top: 10px;
  line-height: 1.4;
}
.auth-form-group-checkbox {
  display: flex;
  align-items: center;
}
.checkbox-container {
  display: block;
  position: relative;
  padding-left: 30px;
  cursor: pointer;
  font-size: 14px;
  color: var(--text-muted);
  user-select: none;
}
.checkbox-container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: var(--input-bg);
  border: 1.5px solid var(--border2);
  border-radius: 4px;
}
.checkbox-container:hover input ~ .checkmark {
  border-color: var(--primary);
}
.checkbox-container input:checked ~ .checkmark {
  background-color: var(--primary);
  border-color: var(--primary);
}
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}
.checkbox-container input:checked ~ .checkmark:after {
  display: block;
}
.checkbox-container .checkmark:after {
  left: 6px;
  top: 2px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.user-profile-wrapper {
  position: relative;
}
.user-badge-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  color: #fff;
  border: none;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px var(--primary-glow);
  transition: transform 0.2s ease;
}
.user-badge-btn:hover {
  transform: scale(1.05);
}
.user-dropdown-menu {
  position: absolute;
  top: 50px;
  right: 0;
  background: var(--bg2);
  border: 1.5px solid var(--border2);
  border-radius: var(--radius);
  width: 240px;
  padding: 15px;
  box-shadow: var(--shadow-lg);
  z-index: 1001;
  display: flex;
  flex-direction: column;
  gap: 8px;
  animation: dropdownFade 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
@keyframes dropdownFade {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
.dropdown-user-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.user-info-name {
  font-weight: 700;
  font-size: 15px;
  color: var(--text);
}
.user-info-detail {
  font-size: 12px;
  color: var(--text-muted);
  word-break: break-all;
}
.user-role-badge {
  display: inline-block;
  align-self: flex-start;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  padding: 2px 8px;
  border-radius: 20px;
  margin-top: 4px;
}
.user-role-badge.admin {
  background: rgba(255, 107, 43, 0.15);
  color: var(--primary);
}
.user-role-badge.user {
  background: rgba(34, 197, 94, 0.15);
  color: var(--green);
}
.dropdown-divider {
  border: 0;
  height: 1px;
  background: var(--border);
  margin: 4px 0;
}
.dropdown-item {
  background: transparent;
  border: none;
  color: var(--text);
  padding: 8px 12px;
  border-radius: var(--radius-sm);
  text-align: left;
  font-family: var(--font);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: background var(--transition), color var(--transition);
}
.dropdown-item:hover {
  background: var(--bg3);
}
.dropdown-item.admin-item {
  color: var(--primary);
}
.dropdown-item.logout-item {
  color: var(--red);
}
.nav-login-btn {
  background: transparent;
  border: 1.5px solid var(--primary);
  color: var(--primary);
  padding: 8px 18px;
  border-radius: var(--radius-sm);
  font-family: var(--font);
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition);
}
.nav-login-btn:hover {
  background: var(--primary);
  color: #fff;
  box-shadow: 0 4px 12px var(--primary-glow);
}

.admin-card-actions {
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  gap: 8px;
  z-index: 10;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  padding: 6px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}
.admin-action-btn {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: none;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background var(--transition), transform 0.2s ease;
}
.admin-action-btn:hover {
  transform: scale(1.1);
}
.admin-action-btn.edit-btn {
  background: var(--primary);
}
.admin-action-btn.edit-btn:hover {
  background: var(--primary-dark);
}
.admin-action-btn.delete-btn {
  background: var(--red);
}
.admin-action-btn.delete-btn:hover {
  background: #dc2626;
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
