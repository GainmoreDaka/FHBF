# FHBF Database Role Schema

## users
id, name, email, phone, password_hash, role, status, created_at, updated_at

## roles
id, name, description

## permissions
id, key, description

## role_permissions
role_id, permission_id

## user_roles
user_id, role_id

## audit_logs
id, user_id, action, entity_type, entity_id, ip_address, created_at

## Permission Keys
- membership.view
- membership.approve
- membership.reject
- membership.renew
- business.view
- business.create
- business.edit
- business.verify
- village.view
- village.book
- village.manage
- payment.view
- payment.confirm
- sponsor.manage
- event.manage
- crm.manage
- report.export
- admin.full
